import React from 'react'
import './Form.css'

export default function Form() {

     const functionPrevent = (e) => {
          e.preventDefault()
     }

     return(
          <form>
               <div className='input-group'>
                    <div className='icon1'>
                         <i class="fa-solid fa-user"></i>                    
                    </div>
                    <label htmlFor='name'>Your name</label>
                    <input type='text' id='name' placeholder='Jane Doe' />
               </div>
               <div className='input-group'>
                    <div className='icon2'>
                         <i class="fa-solid fa-phone"></i>
                    </div>
                    <label htmlFor='phone'>Your phone</label>
                    <input type='number' id='phone' placeholder='068840591207' />
               </div>
               <div className='input-group'>
                    <div className='icon3'>
                         <i class="fa-solid fa-at"></i>
                    </div>
                    <label htmlFor='email'>Your email</label>
                    <input type='email' id='email' placeholder='test@test.com' />
               </div>
               <button className='submitBtn' onClick={functionPrevent}>Save</button>
          </form>
     )
}