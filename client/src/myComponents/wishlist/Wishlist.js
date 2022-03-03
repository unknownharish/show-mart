import React ,{useState}from 'react'
import './wishlist.css'


import axios from 'axios'
import { useSelector } from 'react-redux';
import EachItem_wishlist from './EachItem_wishlist';

export default function Wishlist() {

    const [email, setemail] = useState('');

    let shows = useSelector(state => state.shows);

    let showsList = shows.wishlist.map(x=>{

        return ('.Name: '+x.name +': Lang: '+x.language+'---')
    })
    // console.log(showsList);



    return (
        <div className='wishlist'>

            {shows.wishlist.length !=0?<>

            {
                shows.wishlist.map(x=>{

                   return <EachItem_wishlist item={x} />
                })
            }
           

            <div className="form" >
                <form >
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter mail for download' required name="email" />
                   
                    <button onClick={async(e)=>{
                        e.preventDefault();
                        console.log('pre')
                       let response =await axios.post('/send/shows',{
                           'shows':showsList,
                            'email':email
                            });

                          ! response.data.error?  
                            alert('Mail has been send from our side check your mail...:)'): alert('Network error please try again after some time');
                           

                      console.log(response)
                        
                    }} type="submit">Download</button>

                </form>
            </div>

            </>:<p style={{'textAlign':'center'}}>No shows available for download.Add some shows to use this feature...!</p>}
        </div>
    )
}
 