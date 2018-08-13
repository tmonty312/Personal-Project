import React,{Component} from 'react'
import axios from 'axios'


class Puppy extends Component{
    constructor(props){
        super(props);
        
        this.state =
        {
            name: props.s.name,
            description: props.s.description,
            price: props.s.price,
            image: props.s.image,
            edit: false
        }
    
    }
    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    
    handleDescription = (e) => {
        this.setState({description: e.target.value})
    }
    
    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }
    handleImage = (e) => {
        this.setState({image: e.target.value})
    }
    
    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    sendUpdate = (id) => {
        let {name, description, price, image} = this.state
        let puppy = {name, description, price, image}
        axios.put('/api/puppy/'+id, puppy).then(results=> {
            this.props.updatePuppy(results.data)
            // this.setState({
                // edit: false,
               
            // })
        })
    }
    deletePuppy = (id) => {
        let {name, description, price, image} = this.state
        let puppy = {name, description, price, image}
        axios.delete('/api/puppy/'+id, puppy).then(results=> {
            this.props.updatePuppy(results.data)
            this.setState({
                edit: false,
                name: '',
                description: '',
                price:'',
                image: ''
            })
        })
    }

render(){
   // const { s } = this.props
    

        return(
         <div>
            <div>
        
                <input className= "mypup" value={this.state.name} disabled onChange={this.handleName}/>
                <input className= "mypup-description" value={this.state.description} disabled onChange={this.handleDescription}/>
                <input className= "mypup-price" value={this.state.price} disabled onChange={this.handlePrice}/>
                <input className= "mypup-image" value={this.state.image} disabled onChange={this.handleImage}/>
                
             </div>

        </div>
        )
}
}

export default Puppy