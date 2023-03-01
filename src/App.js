import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Breweries } from "./displays/Breweries";
import { Search } from "./displays/Search";
import { BrewLog } from "./displays/BrewLog";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
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
          <Route path="/home" element={<Breweries />} />
          <Route path="/search" element={<Search />} />
          <Route path="/brewlog" element={<BrewLog />} />
        </Routes>
      </div>
    </Router>
  );
}
