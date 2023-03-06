import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { fetchABrewery } from '../../api'
import siteIcon from '../../assets/weblink-icon.png'
import faveButton from '../../assets/inactive-fave.png'
import unFaveButton from '../../assets/active-fave.png'
import PropTypes from "prop-types"
import './BreweryDetails.css'

export default function BreweryDetail({ id, name, phone, street, city, state, link, zipCode, addFaveBreweries, faveBreweries, unFaveBrewery }) {

  const [isFaved, setIsFaved] = useState(false)
  const [toggleButton, setToggleButton] = useState(faveButton)
  const [networkError, setNetworkError] = useState(false)
  const [breweriesByZip, setBreweriesbyZip] = useState([])
  const url = useLocation()

  useEffect(() => {
    if(breweriesByZip.includes(id)){ 
      setIsFaved(true)
    }
    fetchABrewery(id, zipCode)
      .catch((error) => {
        console.error(error.message)
        setNetworkError(true)
      })
      .then(data=>{
        setBreweriesbyZip(data)
      }) 
  },[])
    
  const oneBrewery = breweriesByZip.find(brewery => brewery.id === id)
 
  const saveFaveBrewery = () => {
    if(!isFaved) {
      addFaveBreweries(oneBrewery)
      setIsFaved(true)
      setToggleButton(unFaveButton)
    } else {
      unFaveBrewery(oneBrewery)
      setIsFaved(false)
      setToggleButton(faveButton)
    }
  }

  return (
    <>
      <div className='brew-details' key={id}>
        <h1>{name}</h1>
        <p>{phone}</p>
        <p>{street}</p>
        <p>{city}, {state}</p>
        <a href={link} alt={link}><img src={siteIcon}/></a>
        <button onClick={saveFaveBrewery}>  
          {url.pathname === `/breweries/${zipCode}` 
            ? <img src={toggleButton} alt='Save to Faves'/>
            : <img src={toggleButton} alt='Remove from Faves'/>}
        </button>
      </div>
    </>
  )
}

BreweryDetail.propTypes = {
  id: PropTypes.string.isRequired
}