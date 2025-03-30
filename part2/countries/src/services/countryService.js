


import axios from "axios"
const baseUrl = "http://localhost:3001/countries"
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&`

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getWeather = (lat, lon, apiKey) => {
    const request = axios.get(`${weatherUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    getWeather: getWeather
}