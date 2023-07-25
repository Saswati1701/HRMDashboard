import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useNavigate } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar';
import './calendar.css'

const data2 = [
  { label: 'Group A', value: 2400 },
  { label: 'Group B', value: 4567 },
  { label: 'Group C', value: 1398 },
  { label: 'Group D', value: 9800 },
  { label: 'Group E', value: 3908 },
  { label: 'Group F', value: 4800 },
];
const Calendar = () => {
  
  return (
    <div style={{width:"100%", marginLeft:'250px'}}>
      <Topbar />
      <div className='calendar-container'>
        Calendar
      </div>
    </div>
  )
}

export default Calendar