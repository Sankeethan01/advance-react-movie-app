import { BiSearchAlt } from "react-icons/bi"


const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search flex items-center justify-between relative">
        <input 
          type="text" 
          placeholder="Search for movies..." 
          className="w-full py-2" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search for movies"
        />
        <button  aria-label="Search" className="absolute right-4 top-5 cursor-pointer"><BiSearchAlt className="w-6 h-6 text-gray-500" /></button>
    </div>
  )
}

export default SearchBar
