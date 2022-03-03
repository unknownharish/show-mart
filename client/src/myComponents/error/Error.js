import React from 'react'
import './error.css'

import close from '../images/x-lg.svg'

import ErrorMsg from './ErrorMsg'

export default function Error({seterror}) {

    return (
        <div className='error'>
            <img onClick={()=>{seterror(0)}} className='error__close' src={close} alt="icon" />
            <ErrorMsg />
        </div>
    )
}
