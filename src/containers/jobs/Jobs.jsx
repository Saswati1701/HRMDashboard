import React , {useState} from 'react'
import './jobs.css'
import Avatars from '../../images/avatars.png'
import { HiOutlinePlus } from "react-icons/hi";
import Topbar from '../../components/topbar/Topbar';
import { Divider } from '@mui/material';
import { BiSolidCalendar } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import AddJob from '../../components/addJob/AddJob';

const Jobs = () => {
  // const [jobArray, setJobArray] = useState(jobInfo);
  const [status, setStatus] = useState("active"); // completed, unfinished
  const [query, setQuery] = useState("");


  const newJob = useSelector(state => state.jobs);
  const jobMap = newJob.job.map((eachJob)=>{
      return(
        <div className='job-card-component'>
          <div className='logo-date'>
            <div className='logo'></div>
            <div style={{color:"#8F8F8F"}}>{eachJob.date}</div>
          </div>
          <div className='titles'>
            <p style={{color:"#CCCCCC", marginBottom:"0.3rem"}}>{eachJob.team}</p>
            <p style={{margin:"0", fontWeight:"bold"}}>{eachJob.jobTitle}</p>
            <p style={{marginTop:"0.5rem"}}>Bangalore, Karnataka</p>
          </div>
          <div className='description'>{eachJob.description}</div>
          <div className='avatars-count'>
            <img src={Avatars} alt="" height="35px" srcset="" />
            <p style={{color:"#CCCCCC"}}>{eachJob.candidates} Candidates</p>
          </div>
    
          
        </div>
      )
  })


  return (
    <div style={{width:'100%', marginLeft:'250px'}}>
      <Topbar callback={setQuery}/>
      <div>
        <div className='jobs-header'>
          <div className='jobs-title'>
            <h1>Jobs</h1>
            <p className='sort' > <span style={{color:'#8F8F8F'}}>Sort by: </span> <span>Creation date</span> <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}><BiSolidCalendar size={25}/></span></p>
          </div>
          <div className='jobs-nav'>
            {/* <h3 onClick={() => { setStatus("active") } }>Active Jobs <span className='jobs-nav-count'>{jobArray.filter((obj)=>{return obj.status=="active"}).length}</span></h3>
            <h3 onClick={() => { setStatus("completed") } }>Completed <span className='jobs-nav-count'>{jobArray.filter((obj)=>{return obj.status=="completed"}).length}</span></h3>
            <h3 onClick={() => { setStatus("unfinished") } }>Unfinished <span className='jobs-nav-count'>{jobArray.filter((obj)=>{return obj.status=="unfinished"}).length}</span></h3> */}
          </div>
          <Divider/>
        </div>
        <div className='Jobs'>
          {jobMap}
          <div className='newJob'>
            <HiOutlinePlus color='#38CB89' size={30}/>
            <AddJob/>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Jobs
