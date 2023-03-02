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
import { Breweries } from "./components/Breweries/Breweries";
import { Search } from "./displays/Search";
import { BrewLog } from "./displays/BrewLogs";
import './App.css'

export default function App() {
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
        </nav>
        <Routes>
          <Route path="/" element={<Breweries />} />
          <Route path="/search" element={<Search />} />
          <Route path="/brewlog" element={<BrewLog />} />
        </Routes>
    </Router>
    </div>
  );
}
