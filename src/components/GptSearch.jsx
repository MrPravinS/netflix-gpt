import SearchBarGpt from './SearchBarGpt'
import MoviesSuggestions from './MoviesSuggestions'

const GptSearch = () => {
  return (
    <div className=''>
      <div className="h-screen w-full absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg"
          alt="bg-img"
          className="h-full w-full object-cover"
        />
      </div>
        <SearchBarGpt/>
        <MoviesSuggestions/>
    </div>
  )
}

export default GptSearch