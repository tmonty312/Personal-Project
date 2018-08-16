import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteFromCart} from '../Ducks/reducer'
import Dashboard from './Dashboard';
import Puppies from './Puppy'


class ShoppingCart extends Component {
    
    
    // round(value, decimals) {
    //     return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    //   }
    

   render() {
    let total = 0
    let cart = this.props.cart.map(item => {
        total += (item.price /2)
        return (
            <div key={item.id}>
                <h4>{item.breed}</h4>
                <img src={item.image} alt="" />               
                <p>{item.description}</p>
                <p>${item.price} each</p>
                {/* <p>Quantity: {item.quantity}</p> */}
                <br/>
                <button onClick={() => this.props.deleteFromCart(item.id)}>Delete</button>
            </div>
        )
    })
    // total = this.round(total, 2)
    return(
        <div>
            <h3>Cart</h3>
            {cart}
            <br />
            <p>Total: ${total}</p>
            {/* <button onClick={this.props.checkout}>Checkout</button> */}<button>Checkout</button>
        </div>
    )
}
}

function mapStateToProps(state){
    return{
        cart: state.cart
    }
}

 export default connect(mapStateToProps, { deleteFromCart })(ShoppingCart);