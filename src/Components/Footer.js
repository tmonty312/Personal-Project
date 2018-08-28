import React from 'react'
import { Link } from 'react-router-dom'





export default function Footer(){
    return (
    <div className="Footer">
       <button className="socialButtons"> <a target="insta" href="https://www.instagram.com/thepuppybarn/"><i className="fab fa-instagram"> </i></a></button>
       <button className="socialButtons"><a target="fb" href="https://www.facebook.com/puppybarn/"> <i className="fab fa-facebook-square"> </i></a></button>
       <button className="socialButtons"><a target="youtube" href="https://www.youtube.com/channel/UCeb425x8VlfPHxP671f0PMA"><i className="fab fa-youtube"></i></a></button> 

         <Link to='/location' className="contact">Contact Us.</Link> 
    </div>
    )
}
