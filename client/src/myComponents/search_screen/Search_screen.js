import React from 'react'
import './screen.css'
import { Link } from 'react-router-dom'


//images
import langicon from '../images/translate.svg'
import calicon from '../images/calendar2-minus.svg'

// useDispatch for redux
import { useDispatch } from 'react-redux'

//import setCurrent from action.js 

import { setCurrent } from '../Redux/action';


import icon from '../images/not_found.jpeg'

export default function Search_screen({ data }) {

    let dispatch = useDispatch();


    console.log('search screen')
    console.log(data.show)
    return (
        <div className='search_screen'>
            <div className="search_img">
                <img loading='lazy' src={data.show.image ? data.show.image.medium : icon} alt="image" />
            </div>           
            <p className='search_name'>{data.show.name.length > 20 ? data.show.name.slice(0, 20) + '...' : data.show.name}</p>
            <p><img src={langicon} alt="" />: {data.show.language}</p>
            <p><img src={calicon} alt="" />: {data.show.premiered !=null?data.show.premiered:'No info'}</p>
            <button onClick={() => {
                dispatch(setCurrent(data))
            }} className='search_button'><Link to={"show/" + data.show.name}> view more  </Link></button>


        </div>
    )
}
