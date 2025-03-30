import {useState, useEffect} from 'react'
import countryService from "./services/countryService"
import Search from "./components/Search"
import Status from "./components/Status"

function App() {
    
    // currently only keepign track of the searched term in the searchbar
    // and the total database of countries from db.json
    const [search, setNewSearch] = useState("")
    const [allCountries, setCountries] = useState(null)
    const [shownCountry, setShownCountry] = useState(null) 


    // axios fetching the entire database from db.json into allCountries
    useEffect(() => {
        countryService
        .getAll()
        .then(countries => {
            setCountries(countries)
        }, [])
    })
    if (!allCountries) {
        return null
    } 


    const showCountry = (name) => {
        setShownCountry(searchedCountries.find(n => n.name.common === name))
        // console.log(shownCountry)
    }

    // handling changes to the searchbar
    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        setShownCountry(null)
        // console.log(search)
        // console.log(searchedCountries.length)
    }


    // automatically filtering countries that match the searched term
    const searchedCountries = search === ""
        ? allCountries
        : allCountries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))


    // returning
    // search bar
    // status depends on how many countries have been filtered
    // displays countries based on the status of the search
    return (
        <div>
            <Search search={search} handleSearchChange={handleSearchChange}/>
            <Status searchedCountries={searchedCountries} showCountry={showCountry} shownCountry={shownCountry}/>
        </div>
    )
}

export default App
