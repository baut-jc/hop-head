import { 
  React,
  useState, 
  useEffect
} from 'react'
import { fetchABrewery } from '../../api'

export function BreweryDetails() {

  // const [breweryID, setBreweryID] = useState('')
  const [brewery, setBrewery] = useState('')
  // const [address, setAddress] = useState('')
  // const [contact, setContact] = useState('')
  // const [website, setWebsite] = useState('')
  const [networkError, setNetworkError] = useState(false)

  const fetchOneBrewery = async () => {
    try {
      const data = await fetchABrewery(brewery)
      setBrewery(data)
      console.log('oneBrewery', brewery)
      setNetworkError(false)
    } catch (error) {
      console.error(error)
      setNetworkError(true)
    }
  }

  useEffect(() => {
    fetchOneBrewery('toltec-brewing-co-albuquerque')
  }, [])

  return (
    <>
      <h1>BreweryName</h1>
      <p>address</p>
      <p>phoneNumber</p>
      <a>weblink</a>
    </>
  )
}