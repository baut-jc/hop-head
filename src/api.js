export const fetchData = () => {
  return (fetch(`https://api.openbrewerydb.org/breweries?by_postal=44107`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  }))}
