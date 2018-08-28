import React,{Component} from 'react'
import Puppy from './Puppy'
import {connect} from 'react-redux'
import {getPuppies} from '../Ducks/reducer'


class Dashboard extends Component{
  componentDidMount(){
    this.props.getPuppies()
  }

  updatePuppy= (puppies) => {
    return puppies
  }
  
  render() {
   
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
