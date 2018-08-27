import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Footer(){
    return (
    <div>
       <button className="socialButtons"> <a target="insta" href="https://www.instagram.com/thepuppybarn/"><i class="fab fa-instagram"> </i></a></button>
       <button className="socialButtons"><a target="fb" href="https://www.facebook.com/puppybarn/"> <i class="fab fa-facebook-square"> </i></a></button>
       <button className="socialButtons"> <a target="youtube" href="https://www.youtube.com/channel/UCeb425x8VlfPHxP671f0PMA"><i class="fab fa-youtube"></i></a> </button>
         <Link to='/location'>Contact Us.</Link> 
    </div>
    )
}