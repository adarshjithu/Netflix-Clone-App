import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../axios'
import { apiKey } from '../Constants/Constants'
import { imageUrl } from '../Constants/Constants'
import './Rowpost.css'
import { useContext } from 'react'
import { appContext } from '../context'


function Rowpost(Props) {
const {search,setsearch,setFilm}=useContext(appContext)
  useEffect(()=>{
    console.log('updating')

    axios.get(Props.url).then((response) => {
      setPoster(response.data.results)
      console.log(response.data.results)
    })
  },[search])
  const [poster, setPoster] = useState([])
  const[urlId ,setUrlId]=useState('')
  
 


  
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
      
        autoplay: 1,
      },
    };



const movieHandle=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    if(response.data.results){
      setUrlId(response.data.results[0].key)
    }
  
  
  
  console.log(urlId?urlId:'')

 
  })
}

  return (
    <div className='row'>
      <h2 className='title'>{Props.title}</h2>
      < div className='posters'>
        {poster.map((obj) => {
          return (
            <img onClick={()=>movieHandle(obj.id)} alt="poster" className={Props.size ? 'size' : 'poster'} src={imageUrl + obj.backdrop_path} />
          )
        })}
      </div>
    {urlId?< Youtube videoId={urlId} opts={opts}/> :''}

    </div>
  )
}

export default Rowpost
