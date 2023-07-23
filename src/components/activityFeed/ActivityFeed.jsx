import React from 'react'
import './activityFeed.css'

const ActivityFeed = ({feedContent, timeline}) => {
  return (
    <div className='activityFeed'>
      <div className='activityFeedLeft'>
        <div className='avatar'></div>
        <div className='feed-content'>
            <p style={{margin:'0', fontSize:'14px'}}>{feedContent}</p>
            <p style={{margin:'0', color:"#C4C4C4",  fontSize:'13px'}}>{timeline}</p>

        </div>
      </div>
        <div className='tag'>
            <p style={{margin:'0', fontWeight:'bold'}} className=''>Applying</p>
        </div>
        
    </div>
  )
}

export default ActivityFeed