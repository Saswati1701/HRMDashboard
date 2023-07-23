import React from 'react'
import './extra.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Extra = () => {
    const percentage = 70;
  return (
    <div className='content'>
      ass
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
            pathColor: `red`,
            textColor: 'blue',
            trailColor: '#d6d6d6',
            backgroundColor: 'red',
          })} 
        />;
      </div>
        
    </div>
  )
}

export default Extra