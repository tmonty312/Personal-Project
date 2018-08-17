import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
    <div className="NavButtons">
        <Link to='/'><button className='homeNavB'>Home</button></Link>
         <Link to='/location'><button className='locationsNavB'>Locations</button></Link>
        <Link to='/puppies'><button className='puppiesNavB'>Puppies</button></Link>
        <Link to='/foundation'><button className='foundationNavB'>Foundation</button></Link>
        <Link to='/about'><button className='aboutNavB'>About</button></Link>
        <Link to='/faq'><button className='faqNavB'>FAQ</button></Link>

        {/* <Link to='/locaton'> Contact Us.</Link> */}
        <Link to='/puppycart'>PuppyCart</Link> 
    </div>
    )
}