import React,{Component} from 'react'



class Customer extends Component{
    render(){
        console.log(this.props)
    let { customer } = this.props
return(
    <div className="textContainer-pup">  
        <div key={customer.id}> 
            <h1>{customer.name}</h1>
            <h2>{customer.phone}</h2>
            <h2>{customer.email}</h2>
            <h3>{customer.address }</h3>
            <h3>ID: {customer.stripeid}</h3>          
        </div>
    </div> 
)
}

}

export default Customer;