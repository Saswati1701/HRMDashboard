import React from 'react'
import './insightcard.css'
import { AiOutlineRise } from "react-icons/ai";
import { PieChart } from '@mui/x-charts/PieChart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// const theme = createTheme({
//   overrides: {
//     MuiButton: {
//       root: {
//         fontSize: '1rem',
//       },
//     },
//   },
// });
const data1 = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
  { label: 'Group E', value: 278 },
  { label: 'Group F', value: 189 },
];

const data2 = [
  { label: 'Group A', value: 74 },
  { label: 'Group B', value: 26 },
 
];



const Insightcard = ({text, number, iconColor, iconbg, increase}) => {
  const percentage = 70;
  return (
    <div className='insightcard-component'>
            <div className='insightcard-left-container'>
                <p style={{color:"#C4C4C4", margin:'0 0 0.3rem 0', fontSize:"14px"}}>{text}</p>
                <h2 style={{margin:'0 0 0.3rem 0'}}>{number}</h2>
                <p style={{margin:"0", display:"flex", alignItems:"center", fontSize:"13px"}}><span className='icon-background' style={{margin:"0 0.5rem 0 0", backgroundColor:`${iconbg}`}} ><AiOutlineRise color={iconColor}/></span>{increase}</p>
            </div>
            <div className='insightcard-right-container'>
            <div className="progress">
              <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,
              
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'butt',
              
                  // Text size
                  textSize: '16px',
              
                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,
              
                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',
              
                  // Colors
                  pathColor: `${iconColor}`,
                  textColor: 'black',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })} 
              />;
            </div>
              
            </div>
    </div>
  )
}

export default Insightcard
