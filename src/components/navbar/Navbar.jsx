import React from 'react'
import './navbar.css';
import { IoGrid, IoSettings } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAccountTree } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Route = ({component: Icons,name, selected=false, onClick }) =>{
  
    return(
      <Link to={`/${name}`} style={{textDecoration:"none", color: 'blue'}}>
        <div className='eachRoute' onClick={onClick}>
            <Icons color="#C4C4C4" />
            <span style={{color: selected ? 'blue' : '#C4C4C4' , paddingLeft:"1rem"}}>{name}</span>
        </div>
      </Link>
    )

}


const Navbar = () => {
  const [select, setSelect] = useState("Dashboard")

  const handleNavClick = (name) => {
    setSelect(name)
  }
  
  return (
    <div className='left-container'>
      <div className='navbar-container'>
        <div className='navbar'>
          <Route component={IoGrid} onClick={() => { handleNavClick("Dashboard") }} selected={ select === "Dashboard" ? true : false } name="Dashboard"/>
          <Route component={FaCalendarAlt} onClick={() => { handleNavClick("Calendar") }} selected={ select === "Calendar" ? true : false } name="Calendar"/>
          <Route component={PiHandbagSimpleFill} onClick={() => { handleNavClick("Jobs") }} selected={ select === "Jobs" ? true : false } name="Jobs" />
          <Route component={BsFillPeopleFill} onClick={() => { handleNavClick("Candidates") }} selected={ select === "Candidates" ? true : false } name="Candidates"/>
          <Route component={MdAccountTree} onClick={() => { handleNavClick("Structure") }} selected={ select === "Structure" ? true : false } name="Structure"/>
          <Route component={IoSettings} onClick={() => { handleNavClick("Settings") }} selected={ select === "Settings" ? true : false } name="Settings"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar