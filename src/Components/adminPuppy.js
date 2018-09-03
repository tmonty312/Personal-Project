import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addToCart, deletePuppy, addPuppy } from '../Ducks/reducer'
import { Link } from 'react-router-dom'


class Puppy extends Component{
    constructor(props){
        super(props)
            this.state= {
                image:'',
                breed:'',
                description:'',
                price: ''
            }
    }
    
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
            let { puppy } = this.props
        return(
            <div className="textContainer-pup">  
                <div className="addNewPup">
                    <h1>Add New Puppy</h1>
                    <input> {puppy.image}</input>
                    <input><h2>{puppy.breed}</h2></input>
                    <input><h2>{puppy.description}</h2></input>
                    <input><h3>{"$" + puppy.price }</h3></input>
                    <button onClick={() => this.props.addPuppy}>Add new pup</button>
                </div>
                <div key={puppy.id}> 
                    <img className="pupimage" src={puppy.image} alt="" />
                    <input><h2>{puppy.breed}</h2></input>
                    <input><h2>{puppy.description}</h2></input>
                    <input><h3>{"$" + puppy.price }</h3></input>
                    <button className= "buttons" onClick={ this.toggleEdit}>Edit Puppy</button>
                    <button className="buybutton" onClick={() => this.props.deletePuppy(item.id)}>Remove pup</button>
                    
                    <Link to='./puppycart'><button className="buybutton" onClick={() => this.addPupToCart(puppy.id)}>Adopt this Cute Guy!!</button></Link>          
                </div>
            </div> 
        )
    }

}
    function mapStateToProps(state) {
        return {
            cart: state.cart
        }
    }


export default connect(mapStateToProps, {addToCart, deletePuppy, addPuppy})(Puppy)