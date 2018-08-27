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
    
        <div>
                <h1>
                        WHERE TO FIND US:
                    <br/>
                        1302 N. Redwood Road 
                    <br/>
                        Saratoga Springs, UT 84045
                    <br/>
                        WHEN TO FIND US:
                    <br/>
                        Monday - Friday: 11:00am - 7:00pm
                    <br/>
                        Saturday: 10:00am - 8:00pm
                    <br/>
​                       Sunday: Closed
                    <br/>
                        GIVE US A CALL:
                    <br/>
                        801.400.3810
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