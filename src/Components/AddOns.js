import React from 'react'
import './AddOns.css'
import img from '../assets/addUsers.svg'

export default function AddOns() {
     return(
          <div>
               <img src={img} alt='add users' />
               <p className='infos'>We're comming soon ! </p>
          </div>
     )
}