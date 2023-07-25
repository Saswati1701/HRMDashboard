import React from 'react'
import './structure.css'

const Structure = () => {
  return (
    <div className='strContainer'>
      <div className="strRow one">
        <div className="strCol one">
          1.
          Board of Directors
          <div className="names">
            <div className="name">Ravi</div>
            <div className="name">Rahul</div>
            <div className="name">Ramesh</div>
          </div>
        </div>
        <div className="strCol two">
          2.
          CEO
          <div className="names">
            <div className="name">Ravi</div>
            <div className="name">Rahul</div>
            <div className="name">Ramesh</div>
          </div>
        </div>
      </div>
      <div className="strRow two">
        <div className="strCol three">
          4.
          Directors
          <div className="names">
            <div className="name">Ravi</div>
            <div className="name">Rahul</div>
            <div className="name">Ramesh</div>
          </div>
        </div>
        <div className="strCol four">
          3.
          Vice President
          <div className="names">
            <div className="name">Ravi</div>
            <div className="name">Rahul</div>
            <div className="name">Ramesh</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure