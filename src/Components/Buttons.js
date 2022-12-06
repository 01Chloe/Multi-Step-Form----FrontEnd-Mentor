import React from 'react'
import './Buttons.css'

export default function Buttons() {
     return(
          <div className='buttons-group'>
               <button className='btn prev-btn'>
                    Go Back
               </button>
               <button className='btn next-btn'>
                    Next Step
               </button>
          </div>
     )
}