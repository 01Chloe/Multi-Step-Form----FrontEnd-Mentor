import React from 'react'
import './Navigation.css'
import CircleShape from './CircleShape'

export default function Navigation( {btnActive, functionChangeActiveBtn} ) {

     // const [btnActive, setBtnActive] = useState(2)

     // const functionChangeActiveBtn = (index) => {
     //      setBtnActive(index)
     // }

  return (
    <nav className='side-navbar'>
     <div className='step'>
          <button onClick={() => functionChangeActiveBtn(1)} className={btnActive === 1 ? 'active-btn' : ''}>1</button>
          <div className='title-group'>
               <p>Step 1</p>
               <h2>Your Info</h2>
          </div>
     </div>
     <div className='step'>
          <button onClick={() => functionChangeActiveBtn(2)} className={btnActive === 2 ? 'active-btn' : ''}>2</button>
          <div className='title-group'>
               <p>Step 2</p>
               <h2>Select Plan</h2>
          </div>
     </div>
     <div className='step'>
          <button onClick={() => functionChangeActiveBtn(3)} className={btnActive === 3 ? 'active-btn' : ''}>3</button>
          <div className='title-group'>
               <p>Step 3</p>
               <h2>Add-Ons</h2>
          </div>
     </div>
     <div className='step'>
          <button onClick={() => functionChangeActiveBtn(4)} className={btnActive === 4 ? 'active-btn' : ''}>4</button>
          <div className='title-group'>
               <p>Step 4</p>
               <h2>Summary</h2>
          </div>
     </div>
     <CircleShape />
    </nav>
  )
}
