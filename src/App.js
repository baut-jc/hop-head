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
import { BrewLog } from "./displays/BrewLogs";
import { Error } from "./components/Errors/error";
import './App.css'

export default function App() {
  const [zipCode, setZipCode] = useState('')
  
  const takeZipCode = inputZip => {
    setZipCode(inputZip)
    console.log('cheers', zipCode)
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
          <Route 
            path="/breweries" 
            element={<Breweries
              zipCode={zipCode} />} />
          <Route 
            path="/search" 
            element={
              <Search
                takeZipCode={takeZipCode} />
            } />
          <Route path="/brewlog" element={<BrewLog />} />
          <Route path="*" element={<Error />}/>
        </Routes>
    </Router>
    </div>
  );
}
