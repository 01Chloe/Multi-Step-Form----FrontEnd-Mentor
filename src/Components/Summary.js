import React from 'react'
import './Summary.css'
import summaryImg from '../assets/summaryImg.svg'

export default function Summary( {name, phone, email} ) {
     return(
          <div>
               <img src={summaryImg} alt='summary' className='summaryImg' />
               <div className='recapOfInfos'>
                    <p>Your Name: {name} </p>
                    <p>Your Phone: {phone}</p>
                    <p>Your Email: {email}</p>
               </div>
               <p className='recap'>Thank you for completing this form ! </p>
          </div>
     )
}