import React from 'react'
import './wishlist.css'


//default image 
import icon from '../images/not_found.jpeg';

export default function EachItem_wishlist({item}) {
    
    console.log(item);



    return (
        <div className='eachItem_wishlist'>
          {item.image?<img src={item.image.medium} loading='lazy' alt="icon image" />:<img src={icon} alt="" />}
           <div className="para">
              {item.name?item.name:' Lorem ipsum dolor sit amet consectetur adipisicing elit'}
           </div>

        </div>
    )
}
