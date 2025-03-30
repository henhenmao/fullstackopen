import {useState, useEffect} from 'react'
import countryService from "./services/countryService"
import Search from "./components/Search"
import Status from "./components/Status"
import Country from './components/Country'
import CountryList from './components/CountryList'

function App() {

    const [search, setNewSearch] = useState("")
    const [allCountries, setCountries] = useState(null)

    useEffect(() => {
        countryService
        .getAll()
        .then(countries => {
            setCountries(countries)
        })
    })
    if (!allCountries) {
        return null
    } 


    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        console.log(search)
        console.log(searchedCountries.length)
    }

    const searchedCountries = search === ""
        ? allCountries
        : allCountries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))


    return (
        <div>
            <h1>Countries Search</h1>
            <Search search={search} handleSearchChange={handleSearchChange}/>
            <Status searchedCountries={searchedCountries}/>
        </div>
    )
}

export default App
