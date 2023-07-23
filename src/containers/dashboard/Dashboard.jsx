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
import ActivityFeed from '../../components/activityFeed/ActivityFeed'

const Dashboard = () => {
  return (
    <div className='content'>
      <div className="left-dashboard">

        <div className='title-bar'>
          <h2 style={{margin:'0'}}>Dashboard</h2>
          <p style={{color:"#8F8F8F", fontWeight:"", margin:"0.5rem 0 1.5rem 0"}}>Hello, Baby. Do you like it?</p>
        </div>

        <div className='insight-cards-container'>
          <Insightcard 
            text="Total Applications" 
            number="5672" 
            iconColor="#38CB89" 
            increase="+14% inc"  
            image={GreenChart} 
            iconbg="#EAF6F4"
          />
          <Insightcard 
            text="Shortlisted Candidates" 
            number="3045" 
            iconColor="#FFA600" 
            increase="+14% inc"  
            image={YellowChart} 
            iconbg="#FFF8EE"
          />
          <Insightcard 
            color="blue" 
            text="Rejected Candidates" 
            number="1055" 
            iconColor="#FF5630" 
            increase="+14% inc" 
            image={OrangeChart} 
            iconbg="#FEF2EF"
          />
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
              <Dropdown val="Month" />
            </div>
          </div>
          <img src={graph} height="250px" alt="" />
        </div>

        <div className='bottom-dashboard'>
          <div className='activity-container'>
            <div className='activity-header'>
              <p>Activity Feed</p>
              <Dropdown val="All Activity" />
            </div>
            <div className='activity-feed-content'>
              <ActivityFeed feedContent="Marvin McKinney applied for the job Product Designer" timeline="10 mins ago"/>
              <ActivityFeed feedContent="Jone Copper created new account as a job hunt" timeline="10 mins ago"/>
              <ActivityFeed feedContent="Marvin McKinney applied for the job Product Designer" timeline="10 mins ago"/>
            </div>

          </div>
          <div className='activity-container'>
            <div className='activity-header'>
              <p>Meetings</p>
              <Dropdown val="Create New" />
            </div>
            <div className='activity-feed-content'>
              <ActivityFeed feedContent="Interview" timeline="9:00 am - 11.30 am"/>
              <ActivityFeed feedContent="Organizational Meeting" timeline="9:00 am - 11.30 am"/>
              <ActivityFeed feedContent="Meeting with the manager" timeline="9:00 am - 11.30 am"/>
            </div>

          </div>
        </div>
      </div>
      
      <div className='right-dashboard'>
     
        
      </div>

    </div>
  )
};



export default Dashboard