import axios from 'axios'

let intitialState = {
    puppiesList: [],
    cart: [],
    customer: [],
    data: null
}



const FULFILLED = "_FULFILLED"
const GET_PUPPIES = "GET_PUPPIES"
const GET_CART = "GET_CART"
const ADD_TO_CART = "ADD_TO_CART"
const DELETE_FROM_CART = "DELETE_FROM_CART"
const UPDATE_QUANTITY = "UPDATE_QUANTITY"
const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART"
const CHECKOUT = "CHECKOUT"
const GET_CUSTOMERS = "GET_CUSTOMERS"
const DELETE_PUPPY = "DELETE_PUPPY"
const ADD_PUPPY = "ADD_PUPPY"
const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

export function getPuppies(){
    let puppiesList = axios.get('/api/puppies').then(results => {
        console.log(results)
        return results.data
    })
    return{
        type: GET_PUPPIES,
        payload: puppiesList
    }
}

export function addPuppy(){
    let puppiesList = axios.post('/api/puppies').then(results => {
        return results.data
    })
    return{
        type: ADD_PUPPY,
        payload: puppiesList
    }
}

export function deletePuppy(id){
    let puppiesList = axios.delete(`/api/puppies/${id}`).then(results =>{
         return results.data
       })
       return {
           type: DELETE_PUPPY,
           payload: puppiesList
       }
     }

export function getCustomers(){
    let customer = axios.get('/api/customers').then(results => {
        return results.data
    })
    return{
        type: GET_CUSTOMERS,
        payload: customer
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

export function checkout(){
    let customer = axios.post(`/api/checkout`).then(results =>{
        return results.data
        })
        return{
            type: CHECKOUT,
            payload: customer
        }
    }
    
    export function getUser(){
        return{
            type: GET_USER,
            payload: axios.get('/api/currentUser')
        }
    }
        export function logout() {
            return {
                type: LOGOUT_USER,
                payload: axios.get('/api/logout')
            }
    }
   
    

    export default function reducer(state = intitialState, action) {
        switch(action.type){
            case GET_PUPPIES + FULFILLED:
            return Object.assign({}, state, {puppiesList: action.payload})
            case DELETE_PUPPY + FULFILLED:
            return Object.assign({}, state, {puppiesList: action.payload})
            case ADD_PUPPY + FULFILLED:
            return Object.assign({}, state, {puppiesList: action.payload})
            case GET_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case GET_CUSTOMERS + FULFILLED:
            return Object.assign({}, state, {customer: action.payload})
            case ADD_TO_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case DELETE_FROM_CART + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case UPDATE_QUANTITY + FULFILLED:
            return Object.assign({}, state, {cart: action.payload})
            case DELETE_ALL_FROM_CART:
            return Object.assign({}, state, {cart: []})
            case CHECKOUT + FULFILLED: 
            return Object.assign({}, state, {customer: action.payload})
            case GET_USER_FULFILLED:
            return{ ...state, data: action.payload.data }
            case LOGOUT_USER_FULFILLED:
            return {state, data: null}
            default: 
            return state;

        }
    }


