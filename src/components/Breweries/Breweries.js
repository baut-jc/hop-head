import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api'
import { BreweryDetails } from '../BreweryDetails/BreweryDetail'
import { Error } from '../Errors/error';
import './Breweries.css'

export const Breweries = ({zipCode, addToBrewFaves}) => {
  const [breweries, setBreweries] = useState([])
  const [networkError, setNetworkError] = useState(false)

  const fetchBreweries = async () => {
    try {
      const data = await fetchData(zipCode)
      setBreweries(data)
      console.log('breweries' , breweries)
      setNetworkError(false)
    } catch (error) {
      console.error(error)
      setNetworkError(true)
    }
  }

  useEffect(() => {
    fetchBreweries()
  }, [])
  console.log('does this do?', breweries)

  const breweryCards = breweries.map((brewery) => {
    console.log('brewery', brewery)
    return (
        <div key={brewery.id} className='brewery-container'>
          {/* if (breweries.length === 0) */}
          <BreweryDetails 
            id={brewery.id}
            name={brewery.name}
            street={brewery.street}
            contact={brewery.phone}
            website={brewery.website_url}
            addToBrewFaves={addToBrewFaves}
            />
        </div>
    )
  })

  return (
    <div className='breweries-display'>
        {breweryCards.length > 0 ? breweryCards : <Error />}
    </div>
  )
}
