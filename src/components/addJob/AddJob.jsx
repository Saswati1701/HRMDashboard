import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputBox from '../inputBox/InputBox';
import MuiButton from '../muiButton/MuiButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddJob() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const [job, setJob] = useState("");
  const [team, setTeam] = useState('');
  const [description, setDescription] = useState('');
  const [candidate, setCandidate] = useState('');
  const dispatch = useDispatch();
  const now = "31-08-2023";

  const jobArray = useSelector((state) => state.jobs.job);
  const key = jobArray.length;
  console.log(key); 


  const handleJobChange = (event) =>{
    setJob(event.target.value);
  }
  const handleTeamChange = (event) =>{
    setTeam(event.target.value);
  }
  const handleDescriptionChange = (event) =>{
    setDescription(event.target.value);
  }
  const handleCandidateChange = (event) =>{
    setCandidate(event.target.value);
  }
  const handleAddJob = (event) =>{
    event.preventDefault();
     console.log(job, team, description, candidate)
     dispatch({
        type: "ADD_JOB",
        payload:{
            jobTitle: job,
            team: team,
            description: description,
            date:now,
            candidates: candidate,
            status: "Active",
            jobKey: key + 1

        }
      })
      setJob("");
      setTeam("");
      setDescription("");
      setCandidate("");

      handleClose();

  }


  return (
    <div>
      <Button onClick={handleOpen}>Add Job</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
            <InputBox onChange={handleJobChange} label= "Job Title"/>
            <InputBox onChange={handleTeamChange} label= "Team"/>
            <InputBox onChange={handleDescriptionChange} label= "Description"/>
            <InputBox onChange={handleCandidateChange} label= "No. of Candidates"/>
            <InputBox label= "Job Key"/>

            <MuiButton onClick={handleAddJob} buttonText="Add Job"/>                        
          {/* </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
