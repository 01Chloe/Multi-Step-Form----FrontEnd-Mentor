import React from 'react'
import './Navigation.css'
import CircleShape from './CircleShape'

export default function Navigation() {
  return (
    <nav className='side-navbar'>
     <div className='step'>
          <button>1</button>
          <div className='title-group'>
               <p>Step 1</p>
               <h2>Your Info</h2>
          </div>
     </div>
     <div className='step'>
          <button className='active-btn'>2</button>
          <div className='title-group'>
               <p>Step 2</p>
               <h2>Select Plan</h2>
          </div>
     </div>
     <div className='step'>
          <button>3</button>
          <div className='title-group'>
               <p>Step 3</p>
               <h2>Add-Ons</h2>
          </div>
     </div>
     <div className='step'>
          <button>4</button>
          <div className='title-group'>
               <p>Step 4</p>
               <h2>Summary</h2>
          </div>
     </div>
     <CircleShape />
    </nav>
  )
}
