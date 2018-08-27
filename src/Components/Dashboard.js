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
        <h3 className= "dashTitle">Bring a Puppy Home!</h3>
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
