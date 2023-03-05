import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { fetchABrewery } from '../../api'
import siteIcon from '../../assets/weblink-icon.png'
import faveButton from '../../assets/inactive-fave.png'
import unFaveButton from '../../assets/active-fave.png'
import './BreweryDetails.css'

export default function BreweryDetail({ id, zipCode, addFaveBreweries, faveBreweries, unFaveBrewery }) {

  const [brewID, setBrewID] = useState ('')
  const [brewName, setBrewName] = useState ('')
  const [brewStreet, setBrewStreet] = useState ('')
  const [brewWebsite, setBrewWebsite] = useState ('')
  const [isFaved, setIsFaved] = useState(false)
  const [networkError, setNetworkError] = useState(false)

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
      console.log('just a Brewery', data)
      setBrewID(id)
    })
  },[])

  const url = useLocation()
  
  // const handleFaves = () => {
  //   const saveFavesBrewery = {
  //     id: id,
  //     name: name,
  //     street: street,
  //     contact: contact,
  //     website: website
  //   }
  //   addToBrewFaves(saveFavesBrewery)
  // }
  
  // const toggleFave = () => {
    //     console.log('something', faveBreweries)//toltec-brewi
    //   // if(isFaveBrewery) {
      //   //   setFaveBreweries(faveBreweries.filter(faveBrewID => faveBrewID !== id))
      //   // } else {
        //   //   setFaveBreweries([...faveBreweries, id])
        //   // }
        // } 
        
        console.log('priint', faveBreweries)
        return (
          <div className={id}>
      {console.log(faveBreweries)}
      {/* <h1>{name}</h1> */}
      <p>this should be the street</p>
      <p>phone number</p>
      {/* <a href={website} alt={website}><img src={siteIcon}/></a> */}
      {/* <button onClick={handleFaves}> */}
        {/* {!isFaveBrewery ? */}
        {/* <img src={faveButton} alt='Save to Faves'/>  */}
        {/* : <img src={unFaveButton} alt='Unsave from Faves'/>} */}
      {/* </button> */}
     {/* onClick={addToBrewLog} */}
    </div>
  )
}