import React from 'react'
import BreweryDetail from '../BreweryDetails/BreweryDetail'

export default function BrewFaves({id, name, phone, street, city, state, link, zipCode, addFaveBreweries, faveBreweries, unFaveBrewery}) {
  console.log('please be nice!', faveBreweries)
  const displayFaveBreweries = faveBreweries.map(brewery => {
    return <BreweryDetail 
    id={brewery.id}
    key={brewery.id}
    name={brewery.name}
    phone={brewery.phone}
    street={brewery.street}
    city={brewery.city} 
    state={brewery.state}
    link={brewery.website_url}
    zipCode={zipCode}
    addFaveBreweries={addFaveBreweries}
    unFaveBrewery={unFaveBrewery}
    faveBreweries={faveBreweries}
    />
  })

  return (
   <div className='fave-breweries'>
     <>
      <div className='brew-details'>
        {displayFaveBreweries.length > 0 
        ? <div className='brew-details' key={id}>
            <h1>{name}</h1>
            <p>{phone}</p>
            <p>{street}</p>
            <p>{city}, {state}</p>
            {/* <a href={link} alt={link}><img src={siteIcon}/></a> */}
            {/* <button onClick={saveFaveBrewery}>  
              {url.pathname === `/breweries/${zipCode}` 
                ? <img src={toggleButton} alt='Save to Faves'/>
                : <img src={toggleButton} alt='Remove from Faves'/>}
            </button> */}
          </div> 
      : <p>You haven't favorited anything!</p>}
      </div>
    </>
  </div>
  )
}
