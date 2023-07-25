import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useNavigate } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar';
import './calendar.css'
import Cell from '../../components/cell/Cell';
import Cell2 from '../../components/cell/Cell2';

const Calendar = () => {
  
  return (
    <div style={{width:"100%", marginLeft:'250px'}}>
      <Topbar />
      <div className='calendar-container'>
        Calendar

        <div className="calendarAll">
          <div className="calendarHeader">
            <div className="calendarHeaderLeft">
              <h3>MAR 7, 2023</h3>
            </div>
            <div className="calendarHeaderRight">
              <h4 className="section">Day</h4>
              <h4 className="section">Week</h4>
              <h4 className="section">Month</h4>
              <h4 className="section">Year</h4>
            </div>
          </div>
          <div className="calendarContent">
            <div className="ccleft">
              <div className="row">
                <Cell2 text={"Interview"} />
              </div>
              <div className="row">
                <Cell2 text={"Design Operation"} />
              </div>
              <div className="row">
                <Cell2 text={"Product Designer"} />
              </div>
              <div className="row">
                <Cell2 text={"UX Designer"} />
              </div>
              <div className="row">
                <Cell2 text={"Graphic Designer"} />
              </div>
            </div>
            <div className="ccright">
              <div className="row">
                <Cell hours={3} colorProp={'#FF5630'} />
                <Cell hours={0} colorProp={'#FF5630'} />
                <Cell hours={0} colorProp={'#FF5630'} />
                <Cell  />
                <Cell  />
                <Cell  />
                <Cell  />
                <Cell  />
              </div>
              <div className="row">
                <Cell  />
                <Cell hours={4} colorProp={'#377DFF'} />
                <Cell hours={0} colorProp={'#377DFF'} />
                <Cell hours={0} colorProp={'#377DFF'} />
                <Cell hours={0} colorProp={'#377DFF'} />
                <Cell  />
                <Cell  />
                <Cell  />
              </div>
              <div className="row">
                <Cell  />
                <Cell  />
                <Cell hours={5} colorProp={'#38CB89'} />
                <Cell hours={0} colorProp={'#38CB89'} />
                <Cell hours={0} colorProp={'#38CB89'} />
                <Cell hours={0} colorProp={'#38CB89'} />
                <Cell hours={0} colorProp={'#38CB89'} />
                <Cell  />
              </div>
              <div className="row">
                <Cell  />
                <Cell  />
                <Cell  />
                <Cell  />
                <Cell hours={2} colorProp={'#FFA600'} />
                <Cell hours={0} colorProp={'#FFA600'} />
                <Cell  />
                <Cell  />
              </div>
              <div className="row">
                <Cell  />
                <Cell  />
                <Cell  />
                <Cell  />
                <Cell  />
                <Cell hours={3} colorProp={'#56CCF2'} />
                <Cell hours={0} colorProp={'#56CCF2'} />
                <Cell hours={0} colorProp={'#56CCF2'} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Calendar