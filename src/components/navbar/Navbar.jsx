import React from 'react'
import './navbar.css';
import { IoGrid, IoSettings } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdAccountTree } from "react-icons/md";


const Route = ({component: Icons,name }) =>{
    return(
        <div>
            <Icons />
            <span>{name}</span>
        </div>
    )

}


const Navbar = () => {
  return (
    <div className='navbar'>
        <Route component={IoGrid} name="Dashboard"/>
        <Route component={FaCalendarAlt} name="Calendar"/>
        <Route component={PiHandbagSimpleFill} name="Jobs"/>
        <Route component={BsFillPeopleFill} name="Candidates"/>
        <Route component={MdAccountTree} name="Structure"/>
        <Route component={IoSettings} name="Settings"/>

    </div>
  )
}

export default Navbar