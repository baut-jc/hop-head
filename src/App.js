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
import fetchData from "./api";
import { Breweries } from "./displays/Breweries";
import { Search } from "./displays/Search";
import { BrewLog } from "./displays/BrewLogs";
import './App.css'

export default function App() {
  const [breweries, setBreweries] = useState([])
  const [networkError, setNetworkError] = useState(false)

  const fetchBreweries = async () => {
    try {
      const data = await fetchData()
      setBreweries(data)
      console.log('breweries' , breweries)
      setNetworkError(false)
    } catch (error) {
      console.error(error)
      setNetworkError(true)
    }
  }

    useEffect(() => {
      fetchBreweries()
    }, [])

  return (
    <Router>
      <div>
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
        </nav>
        <Routes>
          <Route path="/" element={<Breweries />} />
          <Route path="/search" element={<Search />} />
          <Route path="/brewlog" element={<BrewLog />} />
        </Routes>
      </div>
    </Router>
  );
}
