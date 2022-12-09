import React, {useState} from 'react'
import './Cards.css'
import faDice from '../assets/dice-solid.svg'
import playstation from '../assets/playstation.svg'
import gamepadSolid from '../assets/gamepad-solid.svg'

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
                              <img src={gamepadSolid} alt='gamepad' />
                         </div>
                         <p className='title'>Arcade</p>
                         <p className='price'>{option ? '$108/ye' : '$9/mo'}</p>
                    </div>
                    <div onClick={() => selectCardFunction(2)} className={selectedCard === 2 ? 'card selectCard' : 'card'}>                         
                         <div className='pic pic2'>
                              <img src={playstation} alt='playstation logo' />
                         </div>
                         <p className='title'>Advenced</p>
                         <p className='price'>{option ? '$144/ye' : '$12/mo'}</p>
                    </div>
                    <div onClick={() => selectCardFunction(3)} className={selectedCard === 3 ? 'card selectCard' : 'card'}>                         
                         <div className='pic pic3'>
                              <img src={faDice} alt='dice' />
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