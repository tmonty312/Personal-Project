import axios from 'axios'

let intitialState = {
    puppiesList: [],
    cart: []
}



const FULFILLED = "_FULFILLED"
const GET_PUPPIES = "GET_PUPPIES"
const GET_CART = "GET_CART"
const ADD_TO_CART = "ADD_TO_CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"
const UPDATE_QUANTITY = "UPDATE_QUANTITY"
const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART"

export function getPuppies(){
    let puppiesList = axios.get('/api/puppies').then(results => {
        return results.data
    })
    return{
        type: GET_PUPPIES,
        payload: puppiesList
    }
}

export function getCart(){
    let cart = axios.get('/api/cart').then(results =>{
        return results.data
    })
    return {
        type: GET_CART,
        payload: cart
    }
}    
   
export function addToCart(id){
    let cart = axios.post(`/api/cart/${id}`).then(results =>{
        return  results.data
      })
      return {
          type: ADD_TO_CART,
          payload: cart
      }
}

export function updateQuantity(id, quantity) {
    let cart = axios.put(`/api/cart/${id}?quantity=${quantity}`).then(results => {
        return results.data        
    })
    return {
        type: UPDATE_QUANTITY,
        payload: cart
    }
}

 
export function deleteFromCart(id){
   let cart = axios.delete(`/api/cart/${id}`).then(results =>{
        return results.data
      })
      return {
          type: DELETE_FROM_CART,
          payload: cart
      }
    }

export function emptyCart(){
  return {
        type: DELETE_ALL_FROM_CART,
    }
}

    export default function reducer(state = intitialState, action) {
        switch(action.type){
            case GET_PUPPIES + FULFILLED:
            return Object.assign({}, state, {puppiesList: action.payload})
            case GET_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case ADD_TO_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case DELETE_FROM_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case UPDATE_QUANTITY + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case DELETE_ALL_FROM_CART:
            return Object.assign({}, state, {cart: []})
            default: 
            return state
        }
    }


