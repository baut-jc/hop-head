import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import siteIcon from '../../assets/weblink-icon.png'
import faveButton from '../../assets/inactive-fave.png'
import unFaveButton from '../../assets/active-fave.png'
import './BreweryDetails.css'

export function BreweryDetails({ id, name, street, contact, website, addToBrewFaves }) {
  
  const url = useLocation()
  const [faveBreweries, setFaveBreweries] = useState([])
  const [oneBrewery, setOneBrewery] = useState('')

  const addToFave = () => {
      // setOneBrewery(id)
    if(!faveBreweries) {
      const brewery = oneBrewery.id
      setOneBrewery(brewery)
    }
    setOneBrewery(id)
    console.log('something', oneBrewery)//toltec-brewi
  } 
  console.log('does this do?', oneBrewery)


  return (
    <div className={id}>
      <h1>{name}</h1>
      <p>{street}</p>
      <p>{contact}</p>
      <a href={website} alt={website}><img src={siteIcon}/></a>
      {!oneBrewery 
      ? <button onClick={addToFave}><img src={faveButton}/></button> 
      : <button><img src={unFaveButton}/></button>}
     {/* onClick={addToBrewLog} */}
    </div>
  )
}