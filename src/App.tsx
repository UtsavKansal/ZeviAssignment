import React from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import companylogo from './img/Zevilogo.png'

function App() {

  return (
    <div className="App">
      <div className='logo'>
        <img src={companylogo} alt="Zevi Logo" />
      </div>
      <SearchBar/>
    </div>
  );
}

export default App;
