const fetchData = (zipCode) => {
  return (fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`)
  .then(response => {
    console.log('response', response)
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  }))
}


  export { fetchData }