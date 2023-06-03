import React, { useEffect, useState } from 'react'

import axios from '../axios'
import { apiKey, imageUrl } from '../Constants/Constants'

import './Banner.css'

function Banner() {
    const [Movie, setMovie] = useState()
    
    

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response) => {

            setMovie(response.data.results[1])
         
            
        })
    }, [])
    return (
        <div
            style={{ backgroundImage: `url(${Movie ? imageUrl + Movie.backdrop_path : ''})` }}

            className='banner'>
            <div className='content'>
                <h1 className='title'>{Movie ? Movie.original_title||Movie.name : ''}</h1>
                <div className='banner-button'>
                    <button className='button'> Play</button>
                    <button className='button'> My List</ button>
                </div>
                <h1 className='discription'>{Movie ? Movie.overview : ""}</h1>
            </div>
            <div className='fade'></div>
        </div>
    )
}

export default Banner
