import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { fetchABrewery } from '../../api'
import siteIcon from '../../assets/weblink-icon.png'
import faveButton from '../../assets/inactive-fave.png'
import unFaveButton from '../../assets/active-fave.png'
import './BreweryDetails.css'

export default function BreweryDetail({ id, name, phone, street, city, state, link, zipCode, addFaveBreweries, faveBreweries, unFaveBrewery }) {

  const [brewID, setBrewID] = useState ('')
  const [brewName, setBrewName] = useState ('')
  const [brewStreet, setBrewStreet] = useState ('')
  const [brewCity, setBrewCity] = useState('', '')
  const [brewWebsite, setBrewWebsite] = useState ('')
  const [brewContact, setBrewContact] = useState('')
  const [isFaved, setIsFaved] = useState(false)
  const [toggleButton, setToggleButton] = useState(faveButton)
  const [networkError, setNetworkError] = useState(false)
  const url = useLocation()

  useEffect(() => {
    if(faveBreweries.includes(id)){ 
      setIsFaved(true)
      // toggleButton()
    }
    fetchABrewery(id, zipCode)
    .catch((error) => {
      console.error(error.message)
      setNetworkError(true)
    })
    .then(data=>{
      setBrewID(id)
      setBrewName(data.name)
      setBrewContact(data.phone)
      setBrewStreet(data.street)
      setBrewCity(data.city, data.state)
      setBrewWebsite(data.website_url)
      })  
  },[])
  
  
  const saveFaveBrewery = () => {
    if(!isFaved) {
      addFaveBreweries(brewID)
      setIsFaved(true)
      setToggleButton(unFaveButton)
    } else {
      unFaveBrewery(brewID)
      setIsFaved(false)
      setToggleButton(faveButton)
    }
    return
  }

  // const removeUnFaved = () => {
  //   unFaveBrewery(brewID)
  // }
  
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