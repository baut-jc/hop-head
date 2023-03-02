const fetchData = () => {
  return (fetch('https://api.openbrewerydb.org/breweries/')
  .then(response => {
    console.log('response', response)
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  }))}

  export default fetchData