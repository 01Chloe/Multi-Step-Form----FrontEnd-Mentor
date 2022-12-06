import React from 'react'
import './GlobalPages.css'
import Cards from './Cards' 
import Buttons from './Buttons'

export default function GlobalPages() {
     return(
          <div className='global-page'>
               <h1>Select your plan</h1>
               <h3>You have the option of monthly or yearly billing.</h3>
               <Cards />
               <Buttons />
          </div>
     )
}