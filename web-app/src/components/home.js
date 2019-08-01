import React, { Component } from 'react';
// import Image from 'react-bootstrap/Image';
import '../App.css'


class Home extends Component {
  render() {
    return (
      <div className='dude'>

      <header className="App-header">
      <img className='Home-image' alt="Box-Home" src='https://i.etsystatic.com/17607550/r/il/0dbd11/1917628920/il_1588xN.1917628920_4a9m.jpg'/>
        <p>
          Welcome to Lori's Mystery-Box
        </p>
      </header>
      <p style={{color: '#FFFFFF'}}>This is a Space where Gavin shares his creative outlets and a bit of himself.</p>
      </div>
    )
  }
}

export default Home
