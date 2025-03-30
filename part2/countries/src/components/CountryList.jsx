
import CountryItem from "./CountryItem"


const CountryList = ({countries, showCountry}) => {
    // console.log("hgello")
    // console.log(countries)
    return (
        <ul>
            {countries.map(country => 
                <CountryItem key={country.name.common} country={country} showCountry={() => showCountry(country.name.common)}/>
            )}
        </ul>
    )

}

export default CountryList