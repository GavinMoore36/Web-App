import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavGuide from './components/navbar.js'
import Home from './components/home.js'
import ContactInfo from './components/contact.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path= '/home' component={Home} />
        <Route path= '/contact' component={ContactInfo} />
      </div>
    </Router>
  );
}
// <Navguide />

// <Route path= '/info' render={(props) => <Photography cards={this.state.photoCards}/>} />
// <Route path= '/products' render={(props) => <Portfolio cards={this.state.projectCards}/>} />
export default App;
