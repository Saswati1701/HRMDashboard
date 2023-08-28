import React from 'react'
import './candidates.css'
import { BiSolidCalendar } from "react-icons/bi";
import { Divider } from '@mui/material';
import Topbar from '../../components/topbar/Topbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Candidates = () => {
  const newCandidate = useSelector(state => state.candidates);
  const candidateMap = newCandidate.candidate.map((eachCandidate) =>{
    return(
      <TableRow>
        <TableCell >{eachCandidate.name}</TableCell>
        <TableCell >{eachCandidate.education}</TableCell>
        <TableCell >{eachCandidate.experience}</TableCell>
        <TableCell >{eachCandidate.skills}</TableCell>
        <TableCell >{eachCandidate.coverLetter}</TableCell>
        <TableCell >{eachCandidate.appliedDate}</TableCell>
        <TableCell >{eachCandidate.status}</TableCell>
        <TableCell >{eachCandidate.jobKey}</TableCell>
      </TableRow>
    )
  })
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
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                      <TableCell>Name of Candidate</TableCell>
                      <TableCell>Qualifications</TableCell>
                      <TableCell>Experience</TableCell>
                      <TableCell>Skills&nbsp;(g)</TableCell>
                      <TableCell>Cover Letter</TableCell>
                      <TableCell>Applied Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Job Key</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {candidateMap}
                </TableBody>
            </Table>
          </TableContainer>
        </div>

      </div>
    </div>
  )
}

export default Candidates