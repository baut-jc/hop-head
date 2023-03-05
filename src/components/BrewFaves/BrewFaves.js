import React, {useState} from 'react'
import BreweryDetails from '../BreweryDetails/BreweryDetail'

export function BrewFaves({ onToggle }) {
  
  const [faveBreweries, setFaveBreweries] = useState([])
  console.log(faveBreweries, 'where is it?')
  return (
    <div className='brew-logs'>
      <title>BrewFaves</title>
      <h2>Favorite Breweries</h2>
      <p>{ faveBreweries } </p>
      {faveBreweries.map(brewery => (
        <BreweryDetails 
          key={brewery} 
          id={brewery}
          name={brewery.name} 
          onToggle={onToggle}/>
      ))}
          {/* Render other details as needed */}
    </div>
  )
}
