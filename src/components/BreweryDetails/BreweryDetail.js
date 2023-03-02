import React from 'react'
import siteIcon from '../../assets/weblink-icon.png'
import './BreweryDetails.css'

export function BreweryDetails({ id, name, street, contact, website }) {

  return (
    <div className={id}>
      <h1>{name}</h1>
      <p>{street}</p>
      <p>{contact}</p>
      <a href={website} alt={website}><img src={siteIcon}/></a>
    </div>
  )
}