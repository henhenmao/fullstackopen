
import {useState} from "react"


import Country from './Country'
import CountryList from './CountryList'

const Status = ({searchedCountries, showCountry, shownCountry}) => {

    const size = searchedCountries.length // display only

    if (shownCountry) {
        return (
            <div>
                <Country country={shownCountry}/>
            </div>
        )
    }

    if (size === 0) {
        return (
            <div>
                no matches
            </div>
        )
    }

    if (size === 1) {
        return (
            <div>
                <Country country={searchedCountries[0]}/>
            </div>
        )
    }
    
    if (size > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    if (size > 1) {
        return (
            <div>
                <CountryList countries={searchedCountries} showCountry={showCountry}/>
            </div>
        )
    }

    return (
        <div>
            how did you get here this is not suppsoed to happen
        </div>
    )
}

export default Status