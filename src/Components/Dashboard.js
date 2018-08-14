import React,{Component} from 'react'
import Puppy from './Puppy'
import axios from 'axios'


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
          puppies: [],
          cart: []
        }
      }
    
      componentDidMount(){
        axios.get('/api/puppy').then(results => {
          this.setState({puppies: results.data})
        })
      }
    
      updatePuppy= (puppies) => {
        this.setState({puppies: puppies})
      }
    
      addToCart=(id)=>{
        axios.post(`/api/cart/${id}`).then(results =>{
          this.setState({cart: results.data})
        })
      }
      render() {
   
    let puppyMap = this.state.puppies.map(puppy => {
        return <Puppy key={puppy.id} puppy={puppy} updatePuppy={this.updatePuppy} addToCart={this.addToCart} cart={this.state.cart}/>
      })
      console.log(this.state.cart)
    return(
        <div className= "dashboard">
            {puppyMap}
        </div>
    )
    }
}


export default Dashboard