import { BrowserRouter , Routes, Route } from 'react-router-dom'

//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import './App.css';
import Header from './myComponents/header/Header'
import Home from './myComponents/home/Home'
import Error from './myComponents/error/Error'
import Sidescreen from './myComponents/sidescreen/Sidescreen';
import Singleshow from './myComponents/singleshow_screen/Singleshow'
import About from './myComponents/about/About';
import Footer from './myComponents/footer/Footer';
import Wishlist from './myComponents/wishlist/Wishlist';




//react state 
import {useState} from 'react'
function App() {

  const [click, setclick] = useState(0);
  const [error, seterror] = useState(0);




  return (
    <div className="App">
      <BrowserRouter>
          <Header click={click} setclick={setclick}/>
            {click ? <Sidescreen click={click} setclick={setclick}/>:null}
            {error?<Error seterror={seterror}/>:null}
        <Routes>
             <Route exact path='/' element={<Home error={error} seterror={seterror}/>}/>
             <Route exact path='/about' element={<About/>} />
             <Route exact path ='/show/:name' element={<Singleshow/>}/>
             <Route exact path='/wishlist' element={<Wishlist/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
