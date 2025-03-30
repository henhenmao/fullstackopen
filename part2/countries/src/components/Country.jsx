
import Weather from "./Weather"

const Country = ({country}) => {
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => // languages is a object, not an array, cannot use map function, very goofy
                    <li key={language}>
                        {language}
                    </li>
                )}
            </ul>
            <img src={country.flags.png} alt="flag of country"/>
            <Weather country={country}/>
        </div>
    )
}

export default Country