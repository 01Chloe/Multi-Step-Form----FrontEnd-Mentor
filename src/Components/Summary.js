import React from 'react'
import './Summary.css'
import summaryImg from '../assets/summaryImg.svg'

export default function Summary() {
     return(
          <div>
               <img src={summaryImg} alt='summary' className='summaryImg' />
               <p className='recap'>Thank you for completing this form ! </p>
          </div>
     )
}