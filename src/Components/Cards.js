import React, {useState} from 'react'
import './Cards.css'
import SelectOption from './SelectOption'

export default function Cards() {

     const [selectedCard, setSelectedCard] = useState(1)

     const selectCardFunction = (index) => {
          setSelectedCard(index)
     }

     return(
          <div className='cards-container'>
               <div className='cards-group'>
                    <div onClick={() => selectCardFunction(1)} className={selectedCard === 1 ? 'card selectCard' : 'card'}>
                         <div className='pic pic1'>
                              <i class="fa-solid fa-gamepad"></i>
                         </div>
                         <p className='title'>Arcade</p>
                         <p className='price'>$9/mo</p>
                    </div>
                    <div onClick={() => selectCardFunction(2)} className={selectedCard === 2 ? 'card selectCard' : 'card'}>                         <div className='pic pic2'>
                              <i class="fa-brands fa-playstation"></i>
                         </div>
                         <p className='title'>Advenced</p>
                         <p className='price'>$12/mo</p>
                    </div>
                    <div onClick={() => selectCardFunction(3)} className={selectedCard === 3 ? 'card selectCard' : 'card'}>                         <div className='pic pic3'>
                              <i class="fa-solid fa-dice"></i>
                         </div>
                         <p className='title'>Pro</p>
                         <p className='price'>$15/mo</p>
                    </div>
               </div>
               <SelectOption />
          </div>
     )
}