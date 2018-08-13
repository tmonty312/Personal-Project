import React, {Component} from 'react'
import '../App';

import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            puppy: []
        }
    }

render(){
    
    return(
        <div className="Home">
<header className="App-header">
<img src="https://s3-media1.fl.yelpcdn.com/bphoto/pQeEyVRAt2tn5GpFsVihHQ/348s.jpg" className="App-logo" alt="logo" />
<h1 className="App-title">happy. healthy. home raised.</h1>
</header>

<Link to='/location'><button>Locations</button></Link>
<Link to='/puppies'><button>Puppies</button></Link>
<Link to='/foundation'><button>Foundation</button></Link>
<Link to='/about'><button>About</button></Link>
<Link to='/faq' ><button>FAQ</button></Link>
{/* <Dashboard/> */}

</div>
    );
}
}

export default Home;