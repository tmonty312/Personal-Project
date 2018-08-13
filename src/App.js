import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FAQ from './Components/FAQ';
import Foundation from './Components/Foundation';
import About from './Components/About';
import Dashboard from './Components/Dashboard'
import Location from './Components/Locations'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Switch, Route } from 'react-router-dom'

import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state = {
      puppy: []
    }
  }

  componentDidMount(){
    axios.get('/api/puppy').then(results => {
      this.setState({puppy: results.data})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Navbar">
            <Navbar/>
        </div>
        <Switch>
          <Route path='/' component={Home} exact />
<Route path='/location' component={Location}/>
<Route path='/puppies' component={Dashboard}/>
<Route path='/foundation' component={Foundation}/>
<Route path='/about' component={About}/>
<Route path='/faq' component={FAQ}/>
{/* <Dashboard/> */}
</Switch>
        <div className="Footer">
          <Footer/>
        </div>
      </div>
     
    );
  }
}

export default App;
