import React from 'react'
import './navbar.css';
import { IoGrid, IoSettings } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAccountTree } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Route = ({component: Icons,name }) =>{
  const handleClick = () => {

  }
  
    return(
      <Link to={`/${name}`} style={{textDecoration:"none"}}>
        <div className='eachRoute' onClick={handleClick}>
            <Icons color="#C4C4C4" />
            <span style={{color:"#C4C4C4", paddingLeft:"1rem"}}>{name}</span>
        </div>
      </Link>
    )

}


const Navbar = () => {
  return (
    <div className='left-container'>
      <div className='navbar-container'>
        <div className='navbar'>
          <Route component={IoGrid} name="Dashboard"/>
          <Route component={FaCalendarAlt} name="Calendar"/>
          <Route component={PiHandbagSimpleFill} name="Jobs" />
          <Route component={BsFillPeopleFill} name="Candidates"/>
          <Route component={MdAccountTree} name="Structure"/>
          <Route component={IoSettings} name="Settings"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar