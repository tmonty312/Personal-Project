import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../Ducks/reducer'
import ShoppingCart from './ShoppingCart'
import axios from 'axios'


class Puppy extends Component{
    
    addPupToCart = (id) => {
        console.log(this.props)
        let index = this.props.cart.findIndex(item => item.id === id)
        if( index === -1){
            this.props.addToCart(id)
         } else {
             console.log(444444444222222222)
        //     let quantity = this.props.cart[index].quantity
        //     quantity++
        //     this.props.updateQuantity(id, quantity)
        }
      }
         
   
        render(){
            //<ShoppingCart/>
            let { puppy } = this.props
        return(
            <div key={puppy.id}>
                <img src={puppy.image} alt="" />
                <h2>{puppy.breed}</h2>
                <h2>{puppy.description}</h2>
                <h3>{"$" + puppy.price + ".00"}</h3>
                <button onClick={() => this.addPupToCart(puppy.id)}>Adopt this Cute Guy!!</button>          
            </div>
        )
    }

}
    function mapStateToProps(state) {
        return {
            cart: state.cart
        }
    }


export default connect(mapStateToProps, {addToCart})(Puppy)