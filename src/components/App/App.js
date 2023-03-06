import  React,
  { 
    useState,
    useEffect
  } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Breweries } from "../Breweries/Breweries";
import { Search } from "../Search/Search";
import BrewFaves from "../BrewFaves/BrewFaves";
import './App.css'


export default function App() {
  const [zipCode, setZipCode] = useState('')
  const [faveBreweries, setFaveBreweries] = useState([])
  const [error, setError] = useState('')
  
  const takeZipCode = inputZip => {
    setZipCode(inputZip)
  }

  const addFaveBreweries = newFaveBrewery => {
    setFaveBreweries([...faveBreweries, newFaveBrewery])
  }

  const unFaveBrewery = id => {
    const filteredFaves = faveBreweries.filter(brewery => brewery !== id)
    setFaveBreweries(filteredFaves)
  }
  
  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to={`/breweries/${zipCode}`}>Breweries</Link>
          <Link to="/favorites">BrewFaves</Link>
        </nav>
        <Routes>
          <Route 
            path={`/breweries/${zipCode}`} 
            element={<Breweries
            zipCode={zipCode}
            addFaveBreweries={addFaveBreweries}
            faveBreweries={faveBreweries}
            unFaveBrewery={unFaveBrewery} />} />
          <Route 
            path="/search" 
            element={
            <Search
              takeZipCode={takeZipCode} />} />
          <Route path="/favorites" 
            element={
            <BrewFaves
              faveBreweries={faveBreweries}
              unFaveBrewery={unFaveBrewery} />} />
        </Routes>
      </Router>
    </div>
  )
}
