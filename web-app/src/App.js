import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavGuide from './components/navbar.js'

function App() {
  return (
    <div className="App">
    <NavGuide />
      <header className="App-header">
      <img className='Home-image' alt="Box-Home" src='https://i.etsystatic.com/17607550/r/il/0dbd11/1917628920/il_1588xN.1917628920_4a9m.jpg'/>
        <p>
          Welcome to Lori's Mystery-Box
        </p>
      </header>
    </div>
  );
}

export default App;
