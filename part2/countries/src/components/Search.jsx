

const Search = ({search, handleSearchChange}) => {
    // console.log(search)
    return (
        <div>
            <h1>Countries Search</h1>
            find countries <input value={search} onChange={handleSearchChange}/>
        </div>
    )
}

export default Search