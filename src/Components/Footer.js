import React, {Component} from 'react'
// import { connect } from 'react-dom'
// import { logout } from '../Ducks/reducer'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'



export default class Footer extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          modalIsOpen: false,
        }
    }
    
        openModal = () =>  {
            this.setState({modalIsOpen: true});
          }
       
          closeModal = () => {
            this.setState({modalIsOpen: false});
          }

          login = () => {
            let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
            let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
            let scope = encodeURIComponent('openid profile email')
            let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
        
            let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
        
            window.location = location
          }
    

    render(){
    return (
    <div className="Footer">
        <div>
          
            <button className="buybutton" onClick={this.openModal}>Login</button>
        </div>    
        <Modal className="textboxModal"
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal">
            <button onClick={this.closeModal}>close</button>
            <form>
                 <input placeholder='username'/>
                <input placeholder='password'/>
                {this.props.user ? <h1>{this.props.user.name}</h1> :
                <button onClick={this.closeModal} onClick={this.login}>Login!</button>}
                 {this.user ? <Link to="/" onClick={this.logout}>logout</Link> : <Link to="/">login</Link>}
            </form>
        </Modal>                
       <button className="socialButtons"> <a target="insta" href="https://www.instagram.com/thepuppybarn/"><i className="fab fa-instagram"> </i></a></button>
       <button className="socialButtons"><a target="fb" href="https://www.facebook.com/puppybarn/"> <i className="fab fa-facebook-square"> </i></a></button>
       <button className="socialButtons"><a target="youtube" href="https://www.youtube.com/channel/UCeb425x8VlfPHxP671f0PMA"><i className="fab fa-youtube"></i></a></button> 

         <Link to='/location' className="contact">Contact Us.</Link> 
    </div>
    )
}
    }
    // let mapStateToProps = state => {
    //     return {
    //         user: state.user.data
    //     }
    // }
    
    // export default connect(mapStateToProps, {logout})(Footer) 

