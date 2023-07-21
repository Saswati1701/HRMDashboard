import React from 'react'
import './insightcard.css'
import { AiOutlineRise } from "react-icons/ai";
import { PieChart } from '@mui/x-charts/PieChart';


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



const Insightcard = ({text, number, iconColor, increase, image}) => {
  return (
    <div className='insightcard-component'>
            <div className='insightcard-left-container'>
                <p style={{color:"#C4C4C4", margin:'0 0 0.3rem 0', fontSize:"14px"}}>{text}</p>
                <h2 style={{margin:'0 0 0.3rem 0'}}>{number}</h2>
                <p style={{margin:"0", display:"flex", alignItems:"center", fontSize:"13px"}}><span className='icon-background' style={{margin:"0 0.5rem 0 0"}} ><AiOutlineRise color={iconColor}/></span>{increase}</p>
            </div>
            <div className='insightcard-right-container'>
            <PieChart
              series={[
                
                {
                  data: data2,
                  cx: 100,
                  cy: 200,
                  innerRadius: 40,
                  outerRadius: 80,
                },
              ]}
              height={300}
              legend={{ hidden: true }}
            />
            </div>
    </div>
  )
}

export default Insightcard
