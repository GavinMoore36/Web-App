import React, { Component } from 'react';
// import Image from 'react-bootstrap/Image';
import '../App.css'


const style = {color: '#FFFFFF'}

class ContactInfo extends Component {
  render() {
    return (
      <div className='Home-image'>
        <header className="App-header">
          <img className='Home-Image' alt="Contact-Image" src=''/>
          <h1>Lori's Cutoms</h1>
          <p>We hope to hear from you soon</p>
        </header>
        <div style={style}>
          <p><strong>Email:</strong> </p>
          <p><strong>Etsy:</strong> <a href="https://www.etsy.com/shop/CustomDesignedBoxes?ref=l2-shop-info-avatar"></a></p>
        </div>
      </div>
    )
  }
}

export default ContactInfo
