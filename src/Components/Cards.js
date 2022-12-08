import React, {useState} from 'react'
import './Cards.css'

export default function Cards() {

     const [selectedCard, setSelectedCard] = useState(1)
     const [option, setOption] = useState(false)

     const selectCardFunction = (index) => {
          setSelectedCard(index)
     }

     const optionMovingFunction = () => {
          setOption(!option)
     }

     return(
          <div className='cards-container'>
               <div className='cards-group'>
                    <div onClick={() => selectCardFunction(1)} className={selectedCard === 1 ? 'card selectCard' : 'card'}>
                         <div className='pic pic1'>
                              <i class="fa-solid fa-gamepad"></i>
                         </div>
                         <p className='title'>Arcade</p>
                         <p className='price'>{option ? '$108/ye' : '$9/mo'}</p>
                    </div>
                    <div onClick={() => selectCardFunction(2)} className={selectedCard === 2 ? 'card selectCard' : 'card'}>                         <div className='pic pic2'>
                              <i class="fa-brands fa-playstation"></i>
                         </div>
                         <p className='title'>Advenced</p>
                         <p className='price'>{option ? '$144/ye' : '$12/mo'}</p>
                    </div>
                    <div onClick={() => selectCardFunction(3)} className={selectedCard === 3 ? 'card selectCard' : 'card'}>                         <div className='pic pic3'>
                              <i class="fa-solid fa-dice"></i>
                         </div>
                         <p className='title'>Pro</p>
                         <p className='price'>{option ? '$180/ye' : '$15/mo'}</p>
                    </div>
               </div>
               <div className='select-option'>
                    <p className={option ? '' : 'option-selected'}>Monthly</p>
                    <div onClick={optionMovingFunction} className='select-big'>
                         <div className={option ? 'select-little-right' : 'select-little-left'}></div>
                    </div>
                    <p className={option ? 'option-selected' : ''}>Yearly</p>
               </div> 
          </div>
     )
}