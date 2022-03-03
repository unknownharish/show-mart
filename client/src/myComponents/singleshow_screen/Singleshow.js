import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import icon from '../images/not_found.jpeg'


//actions
import {setWishList} from '../Redux/action'
//screens
import Castscreen from '../castScreen/Castscreen'


//svg images
import schedule from '../images/calendar2-minus.svg'
import lang from '../images/translate.svg'
import saved from '../images/bookmark-check.svg'

import './singleshow.css'



export default function Singleshow() {
  const [cast, setcast] = useState('');
  
  let data = useSelector(s => s.shows.current);;
  let dispatch = useDispatch();
  console.log('single')
  console.log(data);


  useEffect(async () => {
    let cast1 = await axios.get('https://api.tvmaze.com/shows/' + data.show.id + '/cast');
    setcast(cast1);
    // console.log(cast);
    // console.log('cast request done')

    
  }, [])

  function setGenre(genre) {

    return <span>{genre}</span>;

  }

  function setSummary(sum) {
    

    return sum.replace(/(<\/?[bpi]>)/g, '')

  }


  return (

    <>
      {data.show ?
        <div className="singleshow0">


          <div className="singleshow1">
            <img className='show1_img' src={data.show.image != null?data.show.image.medium:icon} alt="" />
            {/* <img className='show1_img' src={icon} alt="" /> */}
            <h2  style={{ margin: '12px 0' }}>{data.show.name}</h2>
            <p className='show1_genre'>{data.show.genres ? data.show.genres.map(x => setGenre(x)) : ''}</p>
            <p className="show1_lang"><img src={lang} />{data.show.language ? data.show.language : 'No info'}</p>
            <p className='show_type'><i class="fa fa-user-secret" style={{'marginRight':'-10px'}} aria-hidden="true"></i> {data.show.type}</p>
            <p className='show_prem'>  Updated : <img src={schedule} alt="" />{data.show.premiered?data.show.premiered:'No info'}</p>



            <div className="show1_summary">

              <h3 style={{ textAlign: 'center' }}>Brief--</h3><br />
              <p>{data.show.summary != null ? setSummary(data.show.summary) : 'No summary available...'}</p>
            </div>

            <div className="show_links">

              <p className='show_officialsite'> Official site -<a href={data.show.officialSite} target='_blank'>Click here</a></p><br />
              <p id='bookmark' className='show_bookmark' title='Add to list'><img id='show_img' onClick={
                () => {
                 alert('Show Added to List');
                 dispatch(setWishList(data));

             }} src={saved} alt="" /> </p>
            </div>

          </div>

          <h3> Let's meet the show Cast</h3>
          <div className="singleshow_cast">
            {
            cast?
            // console.log('cast::',cast)
            cast.data.map(x=>{
              console.log(x);
                  return (<Castscreen key={x.person.id} cast={x}/>)
                })
            
            :'No Preview availale'
            
           
              
              // ):<p>No preview available..</p>
              }

           
          </div>
        </div> : <h2 style={{ minHeight: '83vh', textAlign: 'center' }}> No information available... sorry! </h2>}
    </>
  )
}
