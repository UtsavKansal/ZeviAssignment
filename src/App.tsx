import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchIcon from "@material-ui/icons/Search"
import "./Component/SearchBar.css";

function App() {
  return (
    <div className="App">
      <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search..."
        />
        <div className="searchIcon">
            <SearchIcon />
        </div>
      </div>
      
        </div>
    </div>
  );
}

export default App;
