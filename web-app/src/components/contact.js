import React, { Component } from 'react';
// import Image from 'react-bootstrap/Image';
import '../App.css'
import '../photos/home-image.jpg'

const style = {color: '#FFFFFF'}

class ContactInfo extends Component {
  render() {
    return (
      <div className='Home-image'>
        <header className="App-header">
          <img className='Home-Image' alt="Contact-Image" src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/56400396_2182709448486767_9182068161002864640_o.jpg?_nc_cat=102&_nc_oc=AQnK9V0QS7f1TyjdU2ylfqjz7-32tql5kAhHpTJCe5cNGcy5YPa4QvjboW7L3mCS-DAGJCW91EDBKcl6xLpvLMLX&_nc_ht=scontent-lax3-1.xx&oh=53cad9de65a49a8f59aa6c722dbba762&oe=5D92ED5A'/>
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
