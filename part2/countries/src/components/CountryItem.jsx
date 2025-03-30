




const CountryItem = ({country, showCountry}) => {
    return (
        <div className="countryItem">
            <li>{country.name.common}</li>
            <button onClick={showCountry}>show</button>
        </div>
    )
}

export default CountryItem