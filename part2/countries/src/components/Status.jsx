
import {useState} from "react"


import Country from './Country'
import CountryList from './CountryList'

const Status = ({searchedCountries, showCountry, shownCountry}) => {

    const size = searchedCountries.length // display only

    if (shownCountry) {
        return (
            <div>
                {searchedCountries.length}
                <br/>
                <Country country={shownCountry}/>
            </div>
        )
    }

    if (size === 0) {
        return (
            <div>
                {searchedCountries.length}
                <br/>
                no matches
            </div>
        )
    }

    if (size === 1) {
        return (
            <div>
                {searchedCountries.length}
                <br/>
                <Country country={searchedCountries[0]}/>
            </div>
        )
    }
    
    if (size > 10) {
        return (
            <div>
                {searchedCountries.length}
                <br/>
                Too many matches, specify another filter
            </div>
        )
    }

    if (size > 1) {
        return (
            <div>
                {searchedCountries.length}
                <br/>
                <CountryList countries={searchedCountries} showCountry={showCountry}/>
            </div>
        )
    }



    return (
        <div>
            {searchedCountries.length}
            <br/>
            how did you get here this is not suppsoed to happen
        </div>
    )
}

export default Status