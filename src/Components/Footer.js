import React from 'react'
import { Link } from 'react-router-dom'



export default function Footer(){
    return (
    <div>
        <a target="insta" href="https://www.instagram.com/thepuppybarn/"><button>insta</button></a>
        <a target="fb" href="https://www.facebook.com/puppybarn/"><button>fb</button></a>
        <a target="youtube" href="https://www.youtube.com/channel/UCeb425x8VlfPHxP671f0PMA"><button>youtube</button></a>
         {/* <Link to='/social/ig'><button>insta</button></Link> 
         <Link to='/social/fb'><button>fb</button></Link> 
         <Link to='/social/youtube'><button>youtube</button></Link>  */}
         <Link to='/location'>Contact Us.</Link> 
    </div>
    )
}