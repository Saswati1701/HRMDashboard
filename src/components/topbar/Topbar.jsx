import React from 'react'
import './topbar.css'
import { RiSearchLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='search-bar'>
        <input type="text" placeholder="Search for candidates" />
        <div style={{backgroundColor:"blue"}}><RiSearchLine color='white'/> </div>
      </div>
      <div className="profile">
        <div className='circles'></div>
        <div className='circles'></div>
        <div className='circles'></div>
      </div>
        
    </div>
  )
}

export default Topbar