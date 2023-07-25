import React from 'react'
import './cell.css'

const Cell = ({ hours=null, avatar, colorProp }) => {
    const color = hours != null ? colorProp : '';
    let displayText = "";
    if(hours && hours>0) {
        displayText = "About "
        displayText += hours
        displayText += " hours"
    }
  return (
    <div className='cell' style={{
        backgroundColor: `${color}`
    }}>
       <div className="cellContent">
         { displayText } 
       </div>
    </div>
  )
}

export default Cell