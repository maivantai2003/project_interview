import type { ProductSearch } from "../types/search-input"
function Search({search,setSearch}:ProductSearch){
    return(
        <div className="mb-4 sticky top-0 bg-slate-100 z-10 pb-2">
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Tìm sản phẩm..."
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    )
}
export default Search;