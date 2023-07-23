import React from 'react'
import './topbar.css'
import { RiSearchLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='place-search-profile'>
        <div className='search-bar'>
          <input type="text" placeholder="Search for candidates" style={{border:'none', padding:'1rem' , borderRadius:'0.5rem 0 0 0.5rem',  backgroundColor:"#FAFBFD  "}} />
          <RiSearchLine color='white' size={30} style={{ backgroundColor:"blue", borderRadius:'0 0.5rem 0.5rem 0', padding:'0.5rem'}}/>
        </div>
        <div className="profile">
          <div className='circles'></div>
          <div className='circles'></div>
          <div className='circles'></div>
        </div>
      </div>
        
    </div>
  )
}

export default Topbar