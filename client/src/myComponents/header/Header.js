import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

//images
import video from '../images/camera-reels.svg'
import cart from '../images/bag-check.svg'


export default function Header({click,setclick}) {
    
    return (
        <div className='header'>
           

            <ul className='header__tab'>
            
                <li id='logo'> <img src={video} alt="icon" /> Tv search shows</li>
                <li id='links'><Link to={'/'}>Home</Link> <Link to={'/about'}>About</Link><Link to={'/wishlist'}><img src={cart}/> </Link></li>
                <div onClick={()=>{setclick(click+1)}} className="hamburger">
                    <div id='maindiv'></div>
                    <div></div>
                    <div></div>
                </div>
            </ul>
        </div>
    )
}

