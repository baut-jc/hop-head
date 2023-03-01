import { 
  React,
  useState 
} from 'react'

export const BreweryDetails = () => {

  const [brewery, setBrewery] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [website, setWebsite] = useState('')


  return (
    <>
      <h1>BreweryName</h1>
      <p>address</p>
      <p>phoneNumber</p>
      <a>weblink</a>
    </>
  )
}
