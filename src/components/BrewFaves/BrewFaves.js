import React from 'react'
import siteIcon from '../../assets/weblink-icon.png'
import remove from '../../assets/remove.png'
import PropTypes from 'prop-types'

function BrewFaves({id ,faveBreweries, unFaveBrewery}) {
  const displaySavedFaves = faveBreweries.map(brewery => {
    const removeFromSaves = () => {
      unFaveBrewery(brewery)
    }
    return (
      <div key={brewery.id}>
        <h1>{brewery.name}</h1>
        <p>{brewery.phone}</p>
        <p>{brewery.street}</p>
        <p>{brewery.city}, {brewery.state}</p>
        <a href={brewery.website_url} alt={brewery.website_url}><img src={siteIcon}/></a>
        <button onClick={removeFromSaves}><img src={remove} alt='Remove from Faves'/></button>
      </div>
    )
    
  })

  return (
   <div className='saved-faves' key={id}>
     {displaySavedFaves.length > 0 ? displaySavedFaves : <p>You haven't saved anything!</p>}
  </div>
  )
}

export default BrewFaves

BrewFaves.propTypes = {
  faveBreweries: PropTypes.array.isRequired,
  faveBreweries: PropTypes.arrayOf(PropTypes.object.isRequired)
}