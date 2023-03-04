import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import siteIcon from '../../assets/weblink-icon.png'
import faveButton from '../../assets/inactive-fave.png'
import unFaveButton from '../../assets/active-fave.png'
import './BreweryDetails.css'

export function BreweryDetails({ id, name, street, contact, website }) {
  
  const url = useLocation()
  const [faveBreweries, setFaveBreweries] = useState([])
  const isFaveBrewery = faveBreweries.includes(id)

  const toggleFave = () => {
      // setOneBrewery(id)
    if(isFaveBrewery) {
      setFaveBreweries(faveBreweries.filter(faveBrewID => faveBrewID !== id))
    } else {
      setFaveBreweries([...faveBreweries, id])
    }
  } 
  console.log('something', faveBreweries)//toltec-brewi


  return (
    <div className={id}>
      <h1>{name}</h1>
      <p>{street}</p>
      <p>{contact}</p>
      <a href={website} alt={website}><img src={siteIcon}/></a>
      <button onClick={toggleFave}>
        {!isFaveBrewery 
        ? <img src={faveButton} alt='Save to Faves'/> 
        : <img src={unFaveButton} alt='Unsave from Faves'/>}
      </button>
     {/* onClick={addToBrewLog} */}
    </div>
  )
}