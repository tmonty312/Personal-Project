import React, { Component } from 'react'

export default class Location extends Component{

    // handleSubmit(e){
    //     e.preventDefault();
    //     const name = document.getElementById('name').value;
    //     const email = document.getElementById('email').value;
    //     const message = document.getElementById('message').value;
    //     axios({
    //         method: "POST", 
    //         url:"http://localhost:3000/send", 
    //         data: {
    //             name: name,   
    //             email: email,  
    //             messsage: message
    //         }
    //     }).then((response)=>{
    //         if (response.data.msg === 'success'){
    //             alert("Message Sent."); 
    //             this.resetForm()
    //         }else if(response.data.msg === 'fail'){
    //             alert("Message failed to send.")
    //         }
    //     })
    // }

    // resetForm(){
    //     document.getElementById('contact-form').reset();
    // }

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
        {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" />
    </div>
    <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" rows="5" id="message"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form> */}
    </div>    
    )
}
}