import React, { useState, useEffect } from 'react';
import fetchData from '../api'
import { BreweryDetails } from '../components/BreweryDetails/BreweryDetail'

export const Breweries = () => {
  const [breweries, setBreweries] = useState([])
  const [networkError, setNetworkError] = useState(false)

  const fetchBreweries = async () => {
    try {
      const data = await fetchData()
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

  const breweryCards = breweries.map(brewery => {
    console.log('brewery', brewery)
    return (
        <BreweryDetails 
          id={brewery.id}
          // name={brewery.name}
          // street={brewery.street}
          // contact={brewery.contact}
          // website={brewery.website}
          />
    )
  })

  return (
    <div className='breweries-display'>
      {breweryCards}
    </div>
  )
}
