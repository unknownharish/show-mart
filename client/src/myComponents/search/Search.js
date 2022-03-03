import {useSelector,useDispatch} from 'react-redux'

import {setSearchShows} from '../Redux/action'


import React from 'react'
import './search.css'
import axios from 'axios';


export default function Search({seterror,setswap}) {

    let state = useSelector((state)=>state.shows);
    let dispatch =  useDispatch();
   

    async function set(){
      let len= document.querySelector('.search__input').value.length;
        if(len === 0){
            seterror(1);
        //if search query is empty change the screen to future shows
            setswap(1);
            setTimeout(() => {
                seterror(0);
            }, 1500);
        }
       else{
           let q_str = document.querySelector('.search__input').value;
           let {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${q_str}`);
           if(data){
            setswap(0);
        
        //    console.log(data);
           dispatch(setSearchShows(data));
           }

        
       }

       
    }
    return (
        <div className='search'>
            <input className='search__input' type="text" name="" id="" placeholder='Search here' />
            <input onClick={()=>set()} className='search__button' type="button" value="Search" />
        </div>
    )
}
