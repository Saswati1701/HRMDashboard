import React from 'react'
import './cell.css'

const Cell = ({ text }) => {
    
  return (
    <div className='cell' >
       <div className="cell2Content">
         <div>{ text } </div>
       </div>
    </div>
  )
}

export default Cell