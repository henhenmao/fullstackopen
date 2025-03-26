


const Filter = ({filter, handleFilterChange}) => {
    // console.log("made it this far")
    return (
        <div>
            Filter shown with <input value={filter} onChange={handleFilterChange}/>
        </div>
    )

}

export default Filter