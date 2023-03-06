const fetchData = (zipCode) => {
  return (fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  }))
}

const fetchABrewery = (id, zipCode) => {
  return (fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zipCode}&id=${id}`))
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  })
}


  export { fetchData, fetchABrewery }