import React from 'react'
import './cast.css';

import icon from '../images/not_found.jpeg'

export default function Castscreen({cast}) {
    console.log('cast',cast);
    return (
        <div className='castscreen'>
          {cast.character.image !==null?  <img src={cast.character.image.medium} alt="character" />:
                            <img src={icon} alt="" />
           }

           <p>{cast.person.name}</p>
        </div>
    )
}
