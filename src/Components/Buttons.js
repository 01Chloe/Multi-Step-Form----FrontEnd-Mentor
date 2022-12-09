import React from 'react'
import './Buttons.css'

export default function Buttons({btnActive, setActiveBtn, functionChangeActiveBtn}) {
     return(
          <div className='buttons-group'>
               <button className={btnActive === 1 ? 'hide' : 'btn prev-btn'} onClick={() => functionChangeActiveBtn(btnActive - 1)}>
                    Go Back
               </button>
               <button className={btnActive === 4 ? 'hide' : 'btn next-btn'} onClick={() => functionChangeActiveBtn(btnActive + 1)}>
                    Next Step
               </button>
          </div>
     )
}