import  React,
  { 
    useState,
    useEffect
  } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  NavLink
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
          <NavLink to="/" activeClassName='active'>Home</NavLink>
          <NavLink to="/search" activeClassName='active'>Search</NavLink>
          <NavLink to={`/breweries/${zipCode}`} activeClassName='active'>Breweries</NavLink>
          <NavLink to="/favorites" activeClassName='active'>BrewFaves</NavLink>
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
