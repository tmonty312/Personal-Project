import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
    <div>
        <Link to='/'><button>Home</button></Link>
         <Link to='/location'><button>Locations</button></Link>
        <Link to='/puppies'><button>Puppies</button></Link>
        <Link to='/foundation'><button>Foundation</button></Link>
        <Link to='/about'><button>About</button></Link>
        <Link to='/faq'><button>FAQ</button></Link>

         Contact Us. 
    </div>
    )
}