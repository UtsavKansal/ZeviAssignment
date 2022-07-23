import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchIcon from "@material-ui/icons/Search"
import "./Component/SearchBar.css";

function App() {
  const data=["Hello","Bye","Hello"];
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
        <div className="dataResult">
          {data.map((item) => {
            return (
              <a className="dataItem" href="www.google.com" target="_blank">
                <p>{item} </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
