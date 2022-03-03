import React from 'react'
import './sidescreen.css';

import close from '../images/x-lg.svg'
import cart from '../images/bag-check.svg'
import { Link } from 'react-router-dom';

export default function Sidescreen({ click, setclick }) {


    return (
        <div className="mainScreen" onClick={() => {
            setTimeout(() => {
                setclick(click - 1)
            }, 100);
        }}>
            <div className='sidescreen' >

                <img onClick={() => {
                    setTimeout(() => {
                        setclick(click - 1)
                    }, 50);
                }}
                    class='sidescreen__icon' src={close} alt="" />
                <div className="sidescreen__links">
                    <ul className='sidescreen__list'>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li><Link to={'/wishlist'}> <img src={cart} alt="icon" />Check cart  </Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
