import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api'
import { BreweryDetails } from '../BreweryDetails/BreweryDetail'
import './Breweries.css'

export const Breweries = () => {
  const [breweries, setBreweries] = useState([])
  const [networkError, setNetworkError] = useState(false)

  const fetchBreweries = async () => {
    try {
      const data = await fetchData('87114')
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

  const breweryCards = breweries.map((brewery) => {
    console.log('brewery', brewery)
    return (
        <div key={brewery.id} className='brewery-container'>
          <BreweryDetails 
            id={brewery.id}
            name={brewery.name}
            street={brewery.street}
            contact={brewery.phone}
            website={brewery.website_url}
            />
        </div>
    )
  })

  return (
    <div className='breweries-display'>
      {breweryCards}
    </div>
  )
}
