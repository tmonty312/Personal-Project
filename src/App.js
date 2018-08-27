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
import ShoppingCart from './Components/ShoppingCart'
import Checkout from './Components/Checkout'
import { Switch, Route } from 'react-router-dom'



class App extends Component {
  

 

  render() {
    return (
      <div className="App" >
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
<Route path='/puppycart' component={ShoppingCart}/>
<Checkout/>
<Route path='/social/ig' component={() => window.location = 'https://www.instagram.com/thepuppybarn/'}/>
<Route path='/social/fb' component={() => window.location = 'https://www.facebook.com/puppybarn/'}/>
<Route path='/social/youtube' component={() => window.location = 'https://www.youtube.com/channel/UCeb425x8VlfPHxP671f0PMA'}/>
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
