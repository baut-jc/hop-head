import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api'
import BreweryDetails from '../BreweryDetails/BreweryDetail'
import { Error } from '../Errors/error';
import './Breweries.css'

export const Breweries = ({zipCode, addFaveBreweries, faveBreweries, unFaveBrewery}) => {
  
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
  // const toggleFave = (id) => {
  //   if (faveBreweries.includes(id)) {
  //     setFaveBreweries(faveBreweries.filter(faveBrewID => faveBrewID !== id))
  //   } else {
  //     setFaveBreweries([...faveBreweries, id])
  //   }
  // }

  useEffect(() => {
    fetchBreweries()
  }, [])
  console.log('does this do?', breweries)

  const breweryCards = breweries.map((brewery) => {
    console.log('brewery', brewery)
    return (
        <div className='brewery-container'>
          {/* if (breweries.length === 0) */}
          <BreweryDetails 
            id={brewery.id}
            key={brewery.id}
            zipCode={zipCode}
            addFaveBreweries={addFaveBreweries}
            faveBreweries={faveBreweries}
            unFaveBrewery={unFaveBrewery}
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
