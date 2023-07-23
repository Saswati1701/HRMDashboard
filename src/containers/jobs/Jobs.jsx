import React from 'react'
import './jobs.css'
import Avatars from '../../images/avatars.png'
import { HiOutlinePlus } from "react-icons/hi";
import Topbar from '../../components/topbar/Topbar';
import { Divider } from '@mui/material';
import { BiSolidCalendar } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";


const jobInfo=[
  {
    postDate:"5 July",
    team:"Design",
    role:"Senior Product Designer",
    location:"Dhaka, Bangladesh",
    description:"We are looking for a programmer with a keen eye for design for the position of UI/UX designer...",
    count:"122+ Candidates",
  },
  {
    postDate:"6 July",
    team:"Design",
    role:"UI/UX Designer",
    location:"Dhaka, Bangladesh",
    description:"We are looking for a Technical Content writer who is an expert in App and web based content...",
    count:"60+ Candidates",
  },
  {
    postDate:"7 July",
    team:"Design",
    role:"Head of UX",
    location:"Dhaka, Bangladesh",
    description:"We are looking for a programmer with a keen eye for design for the position of UI/UX designer...",
    count:"122+ Candidates",
  },
  {
    postDate:"8 July",
    team:"Marketing",
    role:"Copywriter",
    location:"Dhaka, Bangladesh",
    description:"We are looking for a programmer with a keen eye for design for the position of UI/UX designer...",
    count:"122+ Candidates",
  },
  {
    postDate:"9 July",
    team:"Design",
    role:"Junior Designer",
    location:"Dhaka, Bangladesh",
    description:"We are looking for a programmer with a keen eye for design for the position of UI/UX designer...",
    count:"122+ Candidates",
  },
  {
    postDate:"10 July",
    team:"Developer",
    role:"Wordpress Development",
    location:"Dhaka, Bangladesh",
    description:"We are looking for a programmer with a keen eye for design for the position of UI/UX designer...",
    count:"122+ Candidates",
  },
  {
    postDate:"11 July",
    team:"Design",
    role:"UX Content Writer",
    location:"Dhaka, Bangladesh",
    description:"We are looking for a programmer with a keen eye for design for the position of UI/UX designer...",
    count:"122+ Candidates",
  },
  
]

const JobCard=({postDate, team, role, location, description, count})=>{
  return(
    <div className='job-card-component'>
      <div className='logo-date'>
        <div className='logo'></div>
        <div style={{color:"#8F8F8F"}}>{postDate}</div>
      </div>
      <div className='titles'>
        <p style={{color:"#CCCCCC", marginBottom:"0.3rem"}}>{team}</p>
        <p style={{margin:"0", fontWeight:"bold"}}>{role}</p>
        <p style={{marginTop:"0.5rem"}}>{location}</p>
      </div>
      <div className='description'>{description}</div>
      <div className='avatars-count'>
        <img src={Avatars} alt="" height="35px" srcset="" />
        <p style={{color:"#CCCCCC"}}>{count}</p>
      </div>

      
    </div>
  )
}
const Jobs = () => {
  return (
    <div>
      <Topbar/>
      <div className='jobs-header'>
        <div className='jobs-title'>
          <h1>Jobs</h1>
          <p className='sort' > <span style={{color:'#8F8F8F'}}>Sort by: </span> <span>Creation date</span> <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}><BiSolidCalendar size={25}/></span></p>
        </div>
        <div className='jobs-nav'>
          <h3>Active Jobs <span className='jobs-nav-count'>07</span></h3>
          <h3>Completed <span className='jobs-nav-count'>56</span></h3>
          <h3>Unfinished <span className='jobs-nav-count'>40</span></h3>
        </div>
        <Divider/>
      </div>
      <div className='Jobs'>
          
        {jobInfo.map((val, ind)=>{ return (
          <JobCard
          postDate ={ val.postDate }
          team={val.team}  
          role={val.role}
          location={val.location}
          description={val.description}
          count={val.count}

          />)}
        )}
        <div className='newJob'>
          <HiOutlinePlus color='#38CB89' size={30}/>
          <p style={{color:"#38CB89", fontSize:"1.3rem", margin:'0 '}}>Create New Job</p>
        </div>

        
      </div>
    </div>
  )
}

export default Jobs
