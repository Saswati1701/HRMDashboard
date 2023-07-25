import React from 'react'
import { useNavigate } from 'react-router-dom'
import Insightcard from '../../components/insightcard/Insightcard'
import GreenChart from '../../images/circle1.png'
import YellowChart from '../../images/circle2.png'
import OrangeChart from '../../images/circle3.png'
import './dashboard.css'
import Switch_component from '../../components/switch/Switch'
import Dropdown from '../../components/dropdown/Dropdown'
import ActivityFeed from '../../components/activityFeed/ActivityFeed'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


const RightDashboard_component = ({title, text}) =>{
  return(
    <div className='rightDashboard_component'>
      <div className='rightDashboard_component_circle'></div>
      <div style={{marginLeft:'1rem'}}>
        <p style={{fontSize:'15px', marginBottom:'0', fontWeight:'500' }}>{title}</p>
        <p style={{fontSize:'12px', marginTop:'0.4rem'}}>{text}</p>
      </div>
    </div>
  )
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      // barPercentage: 0.3,
      stacked: true,
    },
    y: {
      // barPercentage: 0.3,
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Applied',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Shortlisted',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Rejected',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

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
            iconbg="#EAF6F4"
          />
          <Insightcard 
            text="Shortlisted Candidates" 
            number="3045" 
            iconColor="#FFA600" 
            increase="+14% inc"  
            iconbg="#FFF8EE"
          />
          <Insightcard 
            color="blue" 
            text="Rejected Candidates" 
            number="1055" 
            iconColor="#FF5630" 
            increase="+14% inc" 
            iconbg="#FEF2EF"
          />
        </div>

        <div className='graph-table'>
          <div className='graph-table-header'>
            <p style={{fontSize:"18px", fontWeight:"bold"}}>Statistics of active applications</p>
            <div className='switches'>
            <Switch_component switchText="Applications" trackColor="#56CCF2" />
            <Switch_component switchText="Shortlisted" trackColor="#FFA600"/>
            <Switch_component switchText="Rejected" trackColor="#FF5630"/>  
        
            </div>
            <div>
              <Dropdown val="Month" />
            </div>
          </div>
          
          <div className="graph">
            <Bar options={options} data={data} />
          </div>
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
        <div className='upper-container_right-dashboard'>
          <div className='user-image'></div>
          <div className='name_designation'>
            <h2 style={{marginBottom:'0'}}>Aman Bubu</h2>
            <p style={{marginTop:'0.5rem'}}>Director of Recruiting</p>
          </div>
        </div>
        <div className='lower-container_right-dashboard'>
          <div>
            <p style={{fontSize:'17px', marginBottom:'0', fontWeight:'bold' }}>Meetings</p>
            <RightDashboard_component title="Cameron Williamson" text="Have you planned any..."/>
            <RightDashboard_component title="Cameron Williamson" text="Have you planned any..."/>

          </div>
          <div>
            <p style={{fontSize:'17px', marginBottom:'0', fontWeight:'bold' }}>Recently Added</p>
            <RightDashboard_component title="Cameron Williamson" text="Have you planned any..."/>
            <RightDashboard_component title="Cameron Williamson" text="Have you planned any..."/>
            <RightDashboard_component title="Cameron Williamson" text="Have you planned any..."/>
            <RightDashboard_component title="Cameron Williamson" text="Have you planned any..."/>
          </div>
        </div>
     
        
      </div>

    </div>
  )
};



export default Dashboard