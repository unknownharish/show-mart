import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import './home.css';

//components
import Search from '../search/Search'
import ImageSlider from '../imageSlider/ImageSlider';
import Future from '../futureshows/Future';
import { setFutureShows } from '../Redux/action'
import Search_screen from '../search_screen/Search_screen';


//images
import schedule from '../images/schedule.png';
import anime from '../images/anime.jpeg';
import avengers from '../images/avengers.jpeg'
import friends from '../images/friends.jpeg'
import getready from '../images/getReady.jpeg'
import upcoming from '../images/upcoming.jpeg'



export default function Home({ error, seterror }) {

    // let data = null;
    const [swap, setswap] = useState(1);
    const { futureShows ,searchShow } = useSelector(s => s.shows);
    const dispatch = useDispatch();

    useEffect(async () => {


        async function futureShows() {
            return await axios.get('https://api.tvmaze.com/schedule/full');


        }

        try {


            let { data } = await futureShows();
            data && dispatch(setFutureShows(data));



        } catch (error) {
            console.log(error);

        }


    }, [])


    return (
        <div className='home'>
            <Search seterror={seterror} setswap={setswap} />

            {/* <div className="imageSlider ">
                <ImageSlider />
            </div> */}
            <div className="caresoul">
            <div className="slidercontainer">
                <div className="item">
                    <img src={schedule} alt="" />
                </div>
                <div className="item">
                    <img src={anime} alt="" />
                </div>
                <div className="item">
                    <img src={avengers} alt="" />
                </div>
                <div className="item">
                    <img src={friends} alt="" />
                </div>
                <div className="item">
                    <img src={getready} alt="" />
                </div>
                <div className="item">
                    <img src={upcoming} alt="" />
                </div>
            </div>
            </div>
           
            {swap ?
                <>
                    <h2 className='home__h3'>Upcoming shows in future...</h2>
                    {futureShows.length === 0 ? <h5>Loading...</h5> : 
                    <div className='home_shows'>

                        {futureShows.map(s => {
                            // console.log(s);
                            return (<Future key={s.id} show={s} />)
                        })}


                    </div>}
                </> : 
                <>
                <h2 style={{'margin':'10px','textAlign':'center'}}>Showing Results</h2>
                
                <div className="home__search">
                    {
                        searchShow.map(s=>{
                            // console.log(s);
                           return <Search_screen data={s}/>
                        })
                    }
                </div>
                
                </>}
        </div> 
    )
}
