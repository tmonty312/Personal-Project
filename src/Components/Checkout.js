import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux'
import { emptyCart } from '../Ducks/reducer'



const CURRENCY = 'USD';

const fromUSDToCent = amount => amount * 100;

const successPayment = data => {
  alert('🐕Payment Successful🐕');
};

const errorPayment = data => {
  alert('❌Payment Error❌😢🤬');
};


const onToken = (amount, description, emptyCart, addCustomer, closeModal) => token =>{
  let customer = addCustomer()
let body = {
  description,
  source: token.id,
  currency: CURRENCY,
  amount: fromUSDToCent(amount),
  ...customer
}

  axios.post(process.env.REACT_APP_PAYMENT_SERVER_URL,
    body)
    .then(() => {
      closeModal()
      emptyCart()
      successPayment()
    })
    .catch(errorPayment);
  }

const Checkout = ({ name, description, amount, emptyCart, addCustomer, closeModal }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description, emptyCart, addCustomer, closeModal)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
  
  />



export default connect(null,{emptyCart})(Checkout);