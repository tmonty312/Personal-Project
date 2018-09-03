import React,{Component} from 'react'
import Puppy from './Puppy'
import {connect} from 'react-redux'
import {getPuppies} from '../Ducks/reducer'
import axios from 'axios'


class Dashboard extends Component{
  constructor(props){
    super(props)
        this.state= {
            image:'',
            breed:'',
            description:'',
            price: ''
        }
}

handleImage = (e) => {
  this.setState({image: e.target.value})
}
handleBreed = (e) => {
  this.setState({breed: e.target.value})
}
handlePrice = (e) => {
  this.setState({price: e.target.value})
}
handleDescription = (e) => {
  this.setState({description: e.target.value})
}

addPuppy = () => {
  const  {image, breed, price, description} = this.state
  const newPup = { image, breed, price, description } 
  axios.post('/api/puppies', newPup).then(results => {
      let newPuppies = [...this.props.puppiesList] 
      newPuppies.push(results.data)

  })
}

  componentDidMount(){
    this.props.getPuppies()
  }

  updatePuppy= (puppies) => {
    return puppies
  }
  
  render() {
    let {puppy} = this.props
   
    let puppiesList = this.props.puppiesList.map(puppy => {
      return <Puppy 
                key={puppy.id} 
                puppy={puppy} 
                updatePuppy={this.updatePuppy} 
                addToCart={this.props.addToCart} 
                cart={this.cart}/>
    })

    return(
      <div className= "dashboard">
        <img src="https://static.wixstatic.com/media/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.png/v1/fill/w_474,h_414,al_c,q_80,usm_0.66_1.00_0.01/693150_f8abf0d27b5e4e4d9d4431dfb46483f0~mv2_d_1500_1308_s_2.webp" className="App-logo-main" alt="logo"/> 
        <h3 className= "dashTitle">Take a Puppy Home!</h3>
        <div className="textContainer-pup">
                <h1>Add New Puppy</h1>
                    <input placeholder='image url' value={this.state.image} onChange={this.handleImage}></input>
                    <input placeholder='breed' value={this.state.breed} onChange={this.handleBreed}></input>
                    <input placeholder='price' value={this.state.price} onChange={this.handlePrice}></input>
                    <textarea placeholder='descripton' value={this.state.description} onChange={this.handleDescription}/>
                    <button onClick={() => this.addPuppy()}>Add new pup</button>
                </div>
        {puppiesList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    puppiesList: state.puppiesList
  }
}

export default connect(mapStateToProps,{getPuppies})(Dashboard)
