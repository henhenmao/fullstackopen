

const Search = ({search, handleSearchChange}) => {
    return (
        <div class="search">
            <h1 className="header">Countries Search</h1>
            <input class="searchbar" value={search} onChange={handleSearchChange}/>
        </div>
    )
}

export default Search