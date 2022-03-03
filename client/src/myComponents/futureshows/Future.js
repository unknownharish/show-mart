import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {setCurrent} from '../Redux/action'

import './future.css'
import icon from '../images/not_found.jpeg'
import inputicon from '../images/box-arrow-right.svg'
import langicon from '../images/translate.svg'
import calicon from '../images/calendar2-minus.svg'

export default function Future({show}) {
    // console.log(show._embedded)

    let dispatch = useDispatch();

    function  set() { 
        dispatch(setCurrent(show._embedded));
    }
    return (
        <div className='future'>
            <div className="future_img">
               <img  loading='lazy' src={show._embedded.show.image?show._embedded.show.image.medium:icon} alt="image" />
            </div>
            {/* <img loading='lazy' src={icon} alt="" /><br/> */}
            <p className='future_name'>{ show._embedded.show.name.length>15?show._embedded.show.name.slice(0,15)+'...':show._embedded.show.name}</p>
            <p><img src={langicon} alt="" /> {show._embedded.show.language}</p>
            <p><img src={calicon} alt="" /> {show._embedded.show.premiered}</p>
           <button onClick={()=> set()} className='future_button'> <Link to={"show/"+show._embedded.show.name}> <img src={inputicon} alt="" /> view more  </Link></button> 
        </div>
    )
}
