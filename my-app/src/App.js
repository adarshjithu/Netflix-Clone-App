
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import { appContext } from './Components/context';
import { useState } from 'react';

import { apiKey } from "./Components/Constants/Constants"
export const originals = `discover/tv?api_key=${apiKey}&with_networks=213`
export const Action = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`
export const Adventure = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate`
export const Animation = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`
export const Comedy = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`
export const Crime = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate`
export const Fantacy = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate`
export const Horror = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`
export const Romance = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`
export const Thriller = `https://api.themoviedb.org/3/discover/movie?api_key=cc977bde8b7b4ab1efddc5880e976cea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=1074953&with_watch_monetization_types=flatrate`





function App() {

  const [search, setSearch] = useState('')
  const [state, setState] = useState()

  const searchFilm = () => {
   if(search==='Action') setState(1)
   if(search==='Animation') setState(2)
   if(search==='Comedy') setState(3)
   if(search==='Crime') setState(4)
   if(search==='Fantacy') setState(5)
   if(search==='Horror') setState(6)
   if(search==='Romance') setState(7)
   if(search==='Thriller') setState(8)
   if(search==='Adventure') setState(9)
   
}




  return (

    <div className="App">

      <appContext.Provider value={{ search, setSearch, searchFilm }}>{console.log('thisi ', search)}
        {console.log(search)}

        <Navbar />
     

      <Banner />
      <Rowpost title='Netflix originals' url={originals} />
     {state===1?<Rowpost title={search?search:'Action'} size={true} url={Action} />:''} 
     {state===2?<Rowpost title={search?search:'Animation'} size={true} url={Animation} />:''} 
     {state===3?<Rowpost title={search?search:'Comedy'} size={true} url={Comedy} />:''} 
     {state===4?<Rowpost title={search?search:'Crime'} size={true} url={Crime} />:''} 
     {state===5?<Rowpost title={search?search:'Fantacy'} size={true} url={Fantacy} />:''} 
     {state===6?<Rowpost title={search?search:'Horror'} size={true} url={Horror} />:''} 
     {state===7?<Rowpost title={search?search:'Romance'} size={true} url={Romance} />:''} 
     {state===7?<Rowpost title={search?search:'Thriller'} size={true} url={Thriller} />:''} 
      
     {state===8?<Rowpost title={search?search:'Adventure'} size={true} url={Adventure} />:''} 

      </appContext.Provider>
    </div>
  );
}

export default App;
