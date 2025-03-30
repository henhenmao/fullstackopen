
import countryService from "../services/countryService"
import {useState, useEffect} from "react"

const Weather = ({country}) => {

    const [countryWeather, setCountryWeather] = useState("")
    const [countryWind, setCountryWind] = useState("")
    const [weatherIcon, setWeatherIcon] = useState(null)

    const iconUrl = `https://openweathermap.org/img/wn/`
    const capital = country.capitalInfo
    const lat = capital.latlng[0]
    const lon = capital.latlng[1]
    const apiKey = import.meta.env.VITE_SOME_KEY

    useEffect(() => {
        countryService
            .getWeather(lat, lon, apiKey)
            .then(weather => {
                setCountryWeather(weather.main.temp)
                setCountryWind(weather.wind.speed)
                setWeatherIcon(`${iconUrl}${weather.weather[0].icon}@2x.png`)
            })
            .catch (error => {
                console.log(`error fetching the temperature and wind speed!`)
            })
    }, [lat, lon, apiKey])


    return (
        <div>
            <h1>{`Weather in ${country.capital}`}</h1>
            <div>{`Temperature: ${countryWeather} celsius`}</div>
            <img src={weatherIcon} alt="weather icon"/>
            <div>{`Wind Speed: ${countryWind} m/s`}</div>
        </div>
        
    )
}

export default Weather