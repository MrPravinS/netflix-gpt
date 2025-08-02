import { useRef, useState } from "react";
import lang from "../utils/languageConstant";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS } from "../utils/constants";

const SearchBarGpt = () => {
  const searchText = useRef(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getMovieSearch = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      if (!data.ok) throw new Error("Failed to fetch movie: " + movie);
      const json = await data.json();
      return json.results && json.results.length > 0 ? json.results[0] : null;
    } catch (err) {
      return null;
    }
  };

  const handleSearch = async () => {
    setError("");
    setResults([]);
    setLoading(true);
    try {
      const query = searchText.current.value;
      // if(query === "") return null;
      const prompt = `A user asked: "${query}"
      Based on this, recommend 5 popular movies (title only) that match the title. Do NOT explain.`;

      let api_key = import.meta.env.VITE_GOOGLE_API_KEY

      const genAI = new GoogleGenAI({ apiKey: api_key });
      const result = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      // Gemini result may be comma or newline separated. Try both.
      let moviesText = result.text || "";
      let titles = moviesText.includes(",") ? moviesText.split(",") : moviesText.split(/\n|\r/);
      titles = titles.map(m => m.trim()).filter(Boolean);
      if (titles.length === 0) throw new Error("No movies returned by AI.");

      const searchMovie = titles.map((movie) => getMovieSearch(movie));
      const allMovie = await Promise.all(searchMovie);
      setResults(allMovie.filter(Boolean));
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-[10%] flex flex-col items-center">
      <form
        className=" w-1/2  bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-4 col-span-9 rounded-md font-bold"
          placeholder="what would you like to watch today"
        />
        <button
          className="bg-red-500 rounded-lg text-white font-bold  m-4 py-2 col-span-3 "
          type="button"
          onClick={handleSearch}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <div className="text-red-500 mt-4">Error: {error}</div>}
      <div className="w-full md:w-3/4 lg:w-2/3 mt-8">
        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((movie, idx) => (
              <div
                key={movie.id || idx}
                className="bg-gradient-to-tr from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row md:h-60 border border-gray-700 hover:shadow-2xl transition duration-200"
              >
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/150x225?text=No+Image"}
                  alt={movie.title}
                  className="w-full md:w-40 h-60 object-cover border-b md:border-b-0 md:border-r border-gray-700"
                />
                <div className="flex flex-col p-4 flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-2">{movie.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-4">{movie.overview || "No description available."}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-500 text-xs">{movie.release_date}</span>
                    {/* <span className="text-yellow-400 text-lg font-bold">{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} ⭐</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {loading && <span className="-z-10 loading loading-ring loading-xl"></span>}
      </div>
    </div>
  );
};

export default SearchBarGpt;
