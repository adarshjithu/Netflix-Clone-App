import React from 'react'
import './Navbar.css'
import { useContext } from 'react'
import { appContext } from '../context'
import { useState } from 'react'
function Navbar() {
  var { search, setSearch, searchFilm } = useContext(appContext)


  return (
    <div className='navbar'>

      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='logo' />

      <ul className='options'>
        <li><a href='home'>Home</a> </li>
        <li><a href='tv'>TV Show</a> </li>
        <li><a href='movies'>Movies</a></li>
        <li><a href='news'>News&Popular</a></li>
        <li><a href='mylist'>My List</a></li>

        <li><button onClick={searchFilm}>Search</button></li>
        <li>
          <select onChange={(e) =>setSearch(e.target.value)}>
            <option>Action</option>
            <option>Animation</option>
            <option>Comedy</option>
            <option>Crime</option>
            <option>Fantacy</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Thriller</option>
          </select>
        </li>
      </ul>


      <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar' />
    </div>
  )
}



export default Navbar

