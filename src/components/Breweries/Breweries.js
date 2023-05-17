import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api'
import BreweryDetails from '../BreweryDetails/BreweryDetail'
import { Error } from '../Errors/error'
import './Breweries.css'
import PropTypes from 'prop-types'

export const Breweries = ({zipCode, addFaveBreweries, faveBreweries, unFaveBrewery}) => {
  
  const [breweries, setBreweries] = useState([])
  const [networkError, setNetworkError] = useState(false)
  
  const fetchBreweries = async () => {
    try {
      const data = await fetchData(zipCode)
      setBreweries(data)
      setNetworkError(false)
    } catch (error) {
      console.error(error)
      setNetworkError(true)
    }
  }

  useEffect(() => {
    fetchBreweries()
  }, [])

  const breweryCards = breweries.map((brewery) => {
    return (
      <div className='brewery-container' key={brewery.id}>
        <BreweryDetails 
          id={brewery.id}
          key={brewery.id}
          name={brewery.name}
          phone={brewery.phone}
          street={brewery.street}
          city={brewery.city} 
          state={brewery.state}
          link={brewery.website_url}
          zipCode={zipCode}
          addFaveBreweries={addFaveBreweries}
          faveBreweries={faveBreweries}
          unFaveBrewery={unFaveBrewery}
        />
      </div>
    )
  })

  return (
      <div className='breweries'>
        <h1>Breweries in {`${zipCode}`}</h1>
        <div className='breweries-display'>
          {breweryCards.length > 0 ? breweryCards : <Error />}
        </div>
      </div>
  )
}

Breweries.propTypes = {
  breweries: PropTypes.array.isRequired,
  breweries: PropTypes.arrayOf(PropTypes.object.isRequired)
}