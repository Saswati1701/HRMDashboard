import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './settings.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Settings = () => {
  return (
    <div style={{width:"100%", marginLeft:'250px'}}>
      <Topbar/>
      <div className='settings-container'>
        <div className='settings-profile'>
          <div className='profile-circle'></div>
          <div style={{marginLeft:'2rem'}}>
            <p>Saswati Mahanta</p>
            <p>Head of Recruiting</p>
            <p>Odisha, India</p>
          </div>
        </div>
        <div className='personal-info'>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '90%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className='input-box'>
              <div className="inputfield">  
                <TextField
                  required
                  // id="outlined-required"
                  label="First Name"
                  defaultValue="Saswati Mahanta"
                />
              </div>
              <div className="inputfield">  
                <TextField
                  required
                  // id="outlined-required"
                  label="First Name"
                  defaultValue="Saswati Mahanta"
                />
              </div>
              <div className="inputfield">  
                <TextField
                  required
                  // id="outlined-required"
                  label="First Name"
                  defaultValue="Saswati Mahanta"
                />
              </div>
              <div className="inputfield">  
                <TextField
                  required
                  // id="outlined-required"
                  label="First Name"
                  defaultValue="Saswati Mahanta"
                />
              </div>
              
            
            </div>
          </Box>
        </div>
        <div className='job-portal'></div>
      </div>
    </div>
  )   
}

export default Settings