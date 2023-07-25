import React from 'react'
import './candidates.css'
import { BiSolidCalendar } from "react-icons/bi";
import { Divider } from '@mui/material';
import Topbar from '../../components/topbar/Topbar';
import { BsFillStarFill } from "react-icons/bs";
import EnhancedTable from '../../components/table/Table';


const Candidates = () => {
  return (
    <div style={{width:'100%', marginleft:'250px'}}>
      <Topbar/>
      <div className='candidates-container'>
        <div className='candidates-header'>
          <div className='candidates-title'>
            <h1 style={{marginTop:'0'}}>Candidates</h1>
            <p className='sort' > <span style={{color:'#8F8F8F'}}>Sort by: </span> <span>Creation date</span> <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}><BiSolidCalendar size={25}/></span></p>
          </div>
          <div className='candidates-nav'>
            <h3 onClick={() => { } }>Total Candidates  <span className='jobs-nav-count'>20</span></h3>
                    </div>
          <Divider/>
        </div>
        <div>
            <EnhancedTable/>
    
        </div>
      </div>
    </div>
  )
}

export default Candidates