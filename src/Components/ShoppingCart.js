// import React, { Component } from 'react';


// class ShoppingCart extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             shoppingCart: this.props.shoppingCart
//         }
//     }
//     componentWillReceiveProps(nextProps) {
//         this.setState({
//             shoppingCart: nextProps.shoppingCart
//         })
//     }

//     render(){
//         let shoppingCartDisplay = this.state.shoppingCart.map(puppy => {
//             return (
//                 <div className="shopping-cart-product-container" key={puppy.id}>
//                     <img src={puppy.image} alt="" />
//                     <div className="shopping-cart-info">
//                         <h2>{puppy.breed}</h2>
//                         <h2>{puppy.title}</h2>
//                         <h2>{"$" + puppy.price + ".00"}</h2>
//                         {/* <div className="shopping-cart-button-container">
//                             <button className="shopping-cart-button" onClick={() => this.props.removeFromShoppingCart(puppy)}>Remove From Shopping Cart</button>
//                         </div> */}
//                     </div>
//                 </div>
//             )
//         })
//         return(
//             <div className="shopping-cart-container">
//                 {shoppingCartDisplay[0] ? 
//                 shoppingCartDisplay
//                 : <div className="go-buy-something"><h1>You Have no puppies!  Go Find your new Pup!</h1></div>}
//             </div>
//         )
//     }
// }

// export default ShoppingCart;