import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const [countryList, setCountryList] = useState([])
  const [country, setCountry] = useState({})

  useEffect(() => {
    axios.get(' https://restcountries.com/v3.1/all').then(response => {
      setAllCountries(response.data)
    })
  }, [])

  useEffect(() => {
    if (allCountries.length) {
      setCountry({})
      setCountryList([])
      setMessage('')
      if (filter.length) {
        const results = allCountries.filter(c =>
          c.name.common.toLowerCase().includes(filter.toLowerCase()),
        )
        if (results.length === 1) {
          setCountry(results[0])
        } else if (results.length > 10) {
          setMessage(`Too many matches, specify another filter`)
        } else {
          setCountryList(results)
        }
      }
    }
  }, [filter, allCountries])

  const handleFilterChanged = e => {
    setFilter(e.target.value)
  }

  return (
    <div>
      Find countries: <input onChange={handleFilterChanged} value={filter} />
      {message && <p>{message}</p>}
      {!!countryList.length && (
        <ul>
          {countryList.map(c => (
            <li key={c.name.common}>{c.name.common}</li>
          ))}
        </ul>
      )}
      {!!Object.keys(country).length && (
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h3>Languages</h3>
          <ul>
            {Object.values(country.languages).map((l, idx) => (
              <li key={idx}>{l}</li>
            ))}
          </ul>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={{ width: '100px' }}
          />
        </div>
      )}
    </div>
  )
}

export default App
