import { 
  React,
  useState
 } from "react";
import { BreweryDetails } from '../components/BreweryDetails/BreweryDetails'

export const Breweries = () => {
  const [breweries, setBreweries] = useState([])

  return (
    <div>
      <title>Breweries</title>
      <BreweryDetails />
      </div>
  )
}
