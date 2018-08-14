import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
    <div>
        <Link to='/'>Home</Link>
         <Link to='/location'>Locations</Link>
        <Link to='/puppies'>Puppies</Link>
        <Link to='/foundation'>Foundation</Link>
        <Link to='/about'>About</Link>
        <Link to='/faq'>FAQ</Link>

        {/* <Link to='/locaton'> Contact Us.</Link> */}
        <Link to='/puppycart'>PuppyCart</Link> 
    </div>
    )
}