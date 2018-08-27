import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getCart, updateQuantity, deleteFromCart} from '../Ducks/reducer'
import Checkout from './Checkout'



class ShoppingCart extends Component {
    
    componentDidMount(){
        this.props.getCart()
    }
    
    round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }
    updateQuantity = (id, update, quantity) => {
        if(update === 'up'){
            quantity++
        } else if (update === 'down' && quantity > 0) {
            quantity--
        }
        this.props.updateQuantity(id, quantity)
    }

   render() {
    let total = 0
    console.log(this.props.cart)
    let cart = this.props.cart.map(item => {
        total += (item.price * item.quantity /2)
        return (
            <div className="textContainer" key={item.id}>
                <img src={item.image} alt="" />               
                <h4>{item.breed}</h4>
                <p>{item.description}</p>
                <p>${item.price} each</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => this.updateQuantity(item.id, 'up', item.quantity)}>▲ </button>
                <button onClick={() => this.updateQuantity(item.id, 'down', item.quantity)}>▼</button>
                <br/>
                <h1>Pay half down to reserve your Pup! Pay the rest when you pick up your new friend!</h1>
                <h2>(Down payments are non-refundible)</h2>
                <button onClick={() => this.props.deleteFromCart(item.id)}>Remove This Pup</button>
            </div>
        )
    })
    total = this.round(total, 2)
    return(
        <div>
            {cart}
            <br />
            <div className="totalBox">
            <p>Total: ${total}</p>
            <Checkout amount={total} description="puppies"/>
            </div>
            {/* name={"Puppy Barn"}
            description={"Your New Puppy"}
            amount={total}/>
            <br/> */}
           
        </div>
    )
}
}

function mapStateToProps(state){
    return{
        cart: state.cart
    }
}

 export default connect(mapStateToProps, {getCart, updateQuantity, deleteFromCart })(ShoppingCart);