import React, { useState, useEffect } from 'react'
import './imageslider.css'
// import Slider from 'react-slick'

// slider css
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

import cfill from '../images/circle-fill.svg';
import c from '../images/circle.svg'


import left from '../images/arrow-left-circle.svg';
import right from '../images/arrow-right-circle.svg';

// image 
import anime from '../images/anime.jpeg'
import avengers from '../images/avengers.jpeg'
import friends from '../images/friends.jpeg'
import getReady from '../images/getReady.jpeg'
import schedule from '../images/schedule.png'
import upcoming from '../images/upcoming.jpeg'


export default function ImageSlider() {

    let [count, setcount] = useState(0);
    let arr = [anime, avengers, getReady, schedule, friends, upcoming];

    function toggle(){
        document.querySelector('.slider_img').classList.add('active');
        console.log('toggle');
        setTimeout(() => {
            
            document.querySelector('.slider_img').classList.remove('active');
        }, 1000);
    }
    function changeL() {
        if (count === 0) {
            setcount(5);
            toggle()
        }
        else {
            setcount(--count);
            toggle()
        }
        console.log('left' + count)
    }

    function changeR() {
        if (count === 5) {
            setcount(0);
            toggle()
        }
        else {
            setcount(++count);
            toggle()
        }
        console.log('right' + count)
    }

    return (
        <div className='slider'>
            <img onClick={()=>changeL()} className='left' src={left} alt="" />
            <img src={arr[count]} alt="" className="slider_img" />
            <img onClick={()=>changeR()} className='right' src={right} alt="" />
            {/* <ul className="slider_list">
           <li id='1'><img  src={cfill} alt="" /></li>
           <li id='2'><img  src={cfill} alt="" /></li>
           <li id='3'><img  src={cfill} alt="" /></li>
           <li id='4'><img  src={cfill} alt="" /></li>
           <li id='5'><img  src={cfill} alt="" /></li>
           <li id='6'><img  src={cfill} alt="" /></li>
       </ul> */}
        </div>
    )
}
