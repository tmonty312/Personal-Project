import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
    <div className="Navbar">
        <Link to='/'><button className='homeNavB'>HOME</button></Link>
        <Link to='/puppies'><button className='puppiesNavB'>PUPPIES</button></Link>
        <Link to='/foundation'><button className='foundationNavB'>FOUNDATION</button></Link>
        <Link to='/about'><button className='aboutNavB'>ABOUT</button></Link>
         <Link to='/location'><button className='locationsNavB'>LOCATIONS</button></Link>
        <Link to='/faq'><button className='faqNavB'>FAQ</button></Link>

        {/* <Link to='/locaton'> Contact Us.</Link> */}
        <Link to='/puppycart'><button className='puppyCartNavB'>PuppyCart</button></Link> 
    </div>
    )
}