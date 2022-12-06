import React, {useState} from 'react'
import './SelectOption.css'

export default function SelectOption() {

     const [option, setOption] = useState(false)

     const optionMovingFunction = () => {
          setOption(!option)
     }

     return(
          <div className='select-option'>
               <p className={option ? '' : 'option-selected'}>Monthly</p>
               <div onClick={optionMovingFunction} className='select-big'>
                    <div className={option ? 'select-little-right' : 'select-little-left'}></div>
               </div>
               <p className={option ? 'option-selected' : ''}>Yearly</p>
          </div> 
     )
}

               