import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getCart, updateQuantity, deleteFromCart} from '../Ducks/reducer'
import Checkout from './Checkout'
import Modal from 'react-modal'



class ShoppingCart extends Component {
    constructor() {
        super();
     
        this.state = {
          modalIsOpen: false,
          name: '',
          email: '',
          phone: '',
          address: '' ,
          city: '',
          state: '',
          zip: ''        
        };
     
      }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }
    handlePhone = (e) => {
        this.setState({phone: e.target.value})
    }
    handleAddress = (e) => {
        this.setState({address: e.target.value})
    }
    handleCity = (e) => {
        this.setState({city: e.target.value})
    }
    handleState = (e) => {
        this.setState({state: e.target.value})
    }
    handleZip = (e) => {
        this.setState({zip: e.target.value})
    }
    
    
    addCustomer = () => {
        const {name, email, phone, address, city, state, zip } = this.state
        let combinedAddress = `${address} ${city}, ${state} ${zip}`
        const newCustomer = { name, email, phone, combinedAddress }
        return newCustomer
    }
   //MODAL  
      openModal = () =>  {
        this.setState({modalIsOpen: true});
      }
   
      closeModal = () => {
        this.setState({modalIsOpen: false});
      }
    
    componentDidMount = () => {
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
                <img className="pupimage" src={item.image} alt="" />               
                <h4>{item.breed}</h4>
                <p>{item.description}</p>
                <p>${item.price} each</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => this.updateQuantity(item.id, 'up', item.quantity)}>▲ </button>
                <button onClick={() => this.updateQuantity(item.id, 'down', item.quantity)}>▼</button>
                <br/>
                <h1 className="paytext">Pay half down to reserve your Pup! Pay the rest when you pick up your new friend!</h1>
                <h2 className="pay_text">(Down payments are non-refundible)</h2>
                <button className="buybutton" onClick={() => this.props.deleteFromCart(item.id)}>Remove This Pup</button>
            </div>
        )
    })
    total = this.round(total, 2)
    console.log('total', total)
    return(
        <div>
            <img src="https://static.wixstatic.com/media/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.png/v1/fill/w_474,h_414,al_c,q_80,usm_0.66_1.00_0.01/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.webp" className="App-logo-main" alt="logo"/> 
            <h1 className="dashTitle">Your New Puppy</h1>
            {cart}
            <br />
            <div className="totalBox">
            <p className="totalprice">Total: ${total}</p>
            {/* <Checkout amount={total} description="puppies"/> */}
            <button className="buybutton" onClick={this.openModal}>Checkout</button>
            </div>
            <div className="Modalparent">
                <Modal className="textboxModal"
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal">
                        <button onClick={this.closeModal}>close</button>
                         <div>Checkout</div>
                        <form>
                            <input placeholder="name" type='text' value={this.state.name} onChange={this.handleName}/>
                            <input placeholder="email" type='email' value={this.state.email} onChange={this.handleEmail}/>
                            <input placeholder="phone" type='phoneNumber' value={this.state.phone} onChange={this.handlePhone}/>
                            <input placeholder="address" type='text' value={this.state.address} onChange={this.handleAddress}/>
                            <input placeholder="city" type='text' value={this.state.city} onChange={this.handleCity}/>
                            <input placeholder="state"type='text' value={this.state.state} onChange={this.handleState}/>
                            <input placeholder="zip" type='number' value={this.state.zip} onChange={this.handleZip}/>
                        </form>
                        <Checkout closeModal={this.closeModal} addCustomer={this.addCustomer} amount={total} description="puppies"/>
                </Modal>
             </div>
           
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