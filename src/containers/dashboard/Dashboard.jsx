import React from 'react'
import { useNavigate } from 'react-router-dom'
import Insightcard from '../../components/insightcard/Insightcard'
import GreenChart from '../../images/circle1.png'
import YellowChart from '../../images/circle2.png'
import OrangeChart from '../../images/circle3.png'
import './dashboard.css'
import ideal from '../../images/ideal.png'
import graph from '../../images/graph.png'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch_component from '../../components/switch/Switch'
import Dropdown from '../../components/dropdown/Dropdown'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='title-bar'>
        <h2 style={{margin:'0'}}>Dashboard</h2>
        <p style={{color:"#8F8F8F", fontWeight:""}}>Hello, Baby. Do you like it?</p>
      </div>
      <div className='insight-cards-container'>
        <Insightcard text="Total Applications" number="5672" iconColor="#38CB89" increase="+14% inc"  image={GreenChart} />
        <Insightcard text="Shortlisted Candidates" number="3045" iconColor="#FFA600" increase="+14% inc"  image={YellowChart} />
        <Insightcard text="Rejected Candidates" number="1055" iconColor="#FF5630" increase="+14% inc" image={OrangeChart} />

      </div>
      <div className='graph-table'>
        <div className='graph-table-header'>
          <p style={{fontSize:"18px", fontWeight:"bold"}}>Statistics of active applications</p>
          <div className='switches'>
           <Switch_component switchText="Applications"/>
           <Switch_component switchText="Shortlisted"/>
           <Switch_component switchText="Rejected"/>  
      
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
        <img src={graph} height="250px" alt="" />
      </div>
      <div className='right-container'> </div>

    </div>
  )
};



export default Dashboard