import React from 'react'
import './Form.css'
import userIcon from '../assets/user-solid.svg'
import phoneIcon from '../assets/phone-solid.svg'
import emailIcon from '../assets/at-solid.svg'

export default function Form( {name, setName, phone, setPhone, email, setEmail} ) {

     const functionPrevent = (e) => {
          e.preventDefault()
     }

     return(
          <form>
               <div className='input-group'>
                    <div className='icon icon1'>
                         <img src={userIcon} alt='user icon' />
                    </div>
                    <label htmlFor='name'>Your name</label>
                    <input type='text' id='name' placeholder='Jane Doe' value={name} onChange={(e) => setName(e.target.value)} />
               </div>
               <div className='input-group'>
                    <div className='icon icon2'>
                         <img src={phoneIcon} alt="phone icon" />
                    </div>
                    <label htmlFor='phone'>Your phone</label>
                    <input type='number' id='phone' placeholder='068840591207' value={phone} onChange={(e) => setPhone(e.target.value)} />
               </div>
               <div className='input-group'>
                    <div className='icon icon3'>
                         <img src={emailIcon} alt="email icon" />
                    </div>
                    <label htmlFor='email'>Your email</label>
                    <input type='email' id='email' placeholder='test@test.com' value={email} onChange={(e) => setEmail(e.target.value)} />
               </div>
               <button className='submitBtn' onClick={functionPrevent}>Save</button>
          </form>
     )
}