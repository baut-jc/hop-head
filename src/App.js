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
import loading from './assets/homer.gif'
import { Breweries } from "./components/Breweries/Breweries";
import { Search } from "./displays/Search";
import { BrewFaves } from "./displays/BrewFaves";
import { Error } from "./components/Errors/error";
import './App.css'

export default function App() {
  const [zipCode, setZipCode] = useState('')
  const [faveBreweries, setFaveBreweries] = useState([])
  console.log('does this do?', faveBreweries)
  
  const takeZipCode = inputZip => {
    setZipCode(inputZip)
    console.log('cheers', zipCode)
  }

  const addToBrewFaves = newFaveBrewery => {
    setFaveBreweries([...faveBreweries, newFaveBrewery])
  }
  
  return (
    <div className='App'>
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/brewlog">BrewLog</Link>
            </li>
          </ul>
          <img src={ loading }/>
        </nav>
        <Routes>
          {/* <Route path='/' element={<App />}/> */}
          <Route 
            path={`/breweries/${zipCode}`} 
            element={<Breweries
              zipCode={zipCode}
              addToBrewFaves={addToBrewFaves} />} />
          <Route 
            path="/search" 
            element={
              <Search
                takeZipCode={takeZipCode} />
            } />
          <Route path="/favorites" 
            element={
              <BrewFaves
                 faveBreweries={faveBreweries}
          />} />
          {/* <Route path="*" element={<Error />}/> */}
        </Routes>
    </Router>
    </div>
  );
}
