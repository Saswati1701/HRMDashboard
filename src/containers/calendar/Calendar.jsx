import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useNavigate } from 'react-router-dom'

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
    <div style={{ height: "100%", width:"100%"}}>
       <PieChart
       sx={{ height: "100%", width:"100%"}}
      series={[

        {
          data: data2,
          cx: 100,
          cy: 200,
          innerRadius: 40,
          outerRadius: 80,
        },
      ]}
      // height="100px"
      // width="100px"
      legend={{ hidden: true }}
    />
    </div>
  )
}

export default Calendar