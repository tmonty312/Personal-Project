import React, { Component } from 'react'
import axios from 'axios'



export default class Location extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    
    resetForm=()=>{
        document.getElementById('contact-form').reset();
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handleMessage = (e) => {
        this.setState({message: e.target.value})
    }
    
    
    
    send_Email = () => {
        const {name, email, message} = this.state
        const newEmail = {name, email, message }
        axios.post('/api/email', newEmail).then(results =>{
            this.setState({
                name: '',
                email: '',
                message: ''
            })
            alert ('Message sent')
        })
    }
    

    render(){
    return( 
    <div className="textContainer">  
        <img src="https://static.wixstatic.com/media/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.png/v1/fill/w_474,h_414,al_c,q_80,usm_0.66_1.00_0.01/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.webp" className="App-logo-main-inbox" alt="logo"/> 
        <h1 className="textTitle">LOCATION</h1>        
        <div>
                <h1 className="text">
                        <p>WHERE TO FIND US:</p>
                    <p>1302 N. Redwood Road</p>
                        <p>Saratoga Springs, UT 84045</p>
                    <br/>
                    <p>WHEN TO FIND US:</p>
                    <p>Monday - Friday: 11:00am - 7:00pm</p>
                        <p>Saturday: 10:00am - 8:00pm</p><p>Sunday: Closed</p>
                    <br/>
                    <p>GIVE US A CALL:</p>
                     <p>801.400.3810</p>
                </h1>
        </div>
                <form id="contact-form" className="nodemailerform">
            <h1 className="textTitle1">Contact Us</h1>
                    <div>
                        <input className="nodemail" type="text" placeholder="name" value={this.state.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <input type="email" className="nodemail" id="email" placeholder="email" value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div>
                        <textarea className="nodemailMessage" type="text" rows="5" placeholder="type message here" value={this.state.message} onChange={this.handleMessage}/>
                    </div>
                    <button className="buybutton" onClick={this.send_Email}>Send</button>
                </form>    
    </div>    
    )
}
}
