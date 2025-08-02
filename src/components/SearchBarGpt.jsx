import lang from "../utils/languageConstant"
const SearchBarGpt = () => {
  return (
    <div className="p-[10%] flex justify-center">
        <form className=" w-1/2  bg-black grid grid-cols-12 rounded-lg">
            <input className="p-2 m-4 col-span-9" placeholder="what would you like to watch today"/> 
             <button className="bg-red-500 rounded-lg text-white font-bold  m-4 py-2 col-span-3 ">Search</button>
        </form>
    </div>
  )
}

export default SearchBarGpt