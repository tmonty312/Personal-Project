import React, {Component} from 'react'
import '../App';

import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            puppy: []
        }
    }

render(){
    
    return(
        <div className="Home">
<header className="App-header">
<img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/13902687_625350567634828_5222364184156045150_n.jpg?_nc_cat=0&oh=34acb1268d760d21e3fbfb303f429876&oe=5BFD8D70" className="App-logo" alt="logo" />
<h1 className="App-title">happy. healthy. home raised.</h1>
</header>

<div className="HomeBut">
    <Link to='/location'><button className= "homeButtons">Locations</button></Link>
    <Link to='/puppies'><button  className= "homeButtons">Puppies</button></Link>
    <br/>
    <Link to='/foundation'><button className= "homeButtons">Foundation</button></Link>
    <Link to='/about'><button className= "homeButtons">About</button></Link>
    <br/>
    <Link to='/faq' ><button className= "homeButtons">FAQ</button></Link>
    {/* <Dashboard/> */}
</div>
</div>
    );
}
}

export default Home;