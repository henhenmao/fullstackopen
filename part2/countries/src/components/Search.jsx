

const Search = ({search, handleSearchChange}) => {
    return (
        <div>
            <h1>Countries Search</h1>
            find countries <input value={search} onChange={handleSearchChange}/>
        </div>
    )
}

export default Search