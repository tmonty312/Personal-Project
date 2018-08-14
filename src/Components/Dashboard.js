import React,{Component} from 'react'
import Puppy from './Puppy'
import axios from 'axios'


class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
          puppies: []
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
    
      render() {
   
    let puppyMap = this.state.puppies.map(puppy => {
        return <Puppy key={puppy.id} puppy={puppy} updatePuppy={this.updatePuppy}/>
      })
    return(
        <div className= "dashboard">
            {puppyMap}
        </div>
    )
    }
}


export default Dashboard