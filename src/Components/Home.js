import React, {Component} from 'react'
import '../App';

import {Link} from 'react-router-dom'

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
        <img src="https://static.wixstatic.com/media/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.png/v1/fill/w_474,h_414,al_c,q_80,usm_0.66_1.00_0.01/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.webp" className="App-logo" alt="logo"/> 

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
            <Link to='/customers'><button className= "homeButtons">Customers</button></Link>
    </div>
</div>
    );
}
}

export default Home;