import React from 'react'
import './topbar.css'
import { RiSearchLine } from "react-icons/ri";
import { BsQuestionCircleFill } from "react-icons/bs";
import { BiSolidBellRing } from "react-icons/bi";
import { Avatar } from '@mui/material';


const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='place-search-profile'>
        <div className='search-bar'>
          <input type="text" placeholder="Search for candidates" style={{border:'none', padding:'1rem' , borderRadius:'0.5rem 0 0 0.5rem',  backgroundColor:"#FAFBFD  "}} />
          <RiSearchLine color='white' size={30} style={{ backgroundColor:"#377DFF", borderRadius:'0 0.5rem 0.5rem 0', padding:'0.5rem'}}/>
        </div>
        <div className="profile">
          <BsQuestionCircleFill size={25}/>
          <BiSolidBellRing size={25}/>
          <Avatar sx={{height:'29px', width:"29px"}} />
        </div>
      </div>
        
    </div>
  )
}

export default Topbar