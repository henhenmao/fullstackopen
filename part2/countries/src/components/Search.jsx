

const Search = ({search, handleSearchChange}) => {
    // console.log(search)
    return (
        <div>
            find countries <input value={search} onChange={handleSearchChange}/>
        </div>
    )
}

export default Search