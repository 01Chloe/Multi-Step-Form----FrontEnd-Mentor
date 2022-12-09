import React, {useState} from 'react'
import './GlobalPages.css'
import Cards from './Cards' 
import Buttons from './Buttons'
import Form from './Form'
import AddOns from './AddOns'
import Summary from './Summary'

export default function GlobalPages( {btnActive, setBtnActive, functionChangeActiveBtn} ) {

     const [name, setName] = useState("")
     const [phone, setPhone] = useState("")
     const [email, setEmail] = useState("")

     return(
          <div className='global-pages'>
               <div className={btnActive === 1 ? '' : 'hide'}>
                    <h1>Your infos</h1>
                    <h3>You can enter your personals informations</h3>
                    <Form name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />
                    <Buttons btnActive={btnActive} setBtnActive={setBtnActive} functionChangeActiveBtn={functionChangeActiveBtn} />
               </div>
               <div className={btnActive === 2 ? '' : 'hide'}>
                    <h1>Select your plan</h1>
                    <h3>You have the option of monthly or yearly billing.</h3>
                    <Cards />
                    <Buttons btnActive={btnActive} setBtnActive={setBtnActive} functionChangeActiveBtn={functionChangeActiveBtn} />
               </div>
               <div className={btnActive === 3 ? '' : 'hide'}>
                    <h1>Add ons</h1>
                    <h3>You can add your friends</h3>
                    <AddOns />
                    <Buttons btnActive={btnActive} setBtnActive={setBtnActive} functionChangeActiveBtn={functionChangeActiveBtn} />
               </div>
               <div className={btnActive === 4 ? '' : 'hide'}>
                    <h1>Summary</h1>
                    <h3>Here you have a recap.</h3>
                    <Summary name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} />
                    <Buttons btnActive={btnActive} setBtnActive={setBtnActive} functionChangeActiveBtn={functionChangeActiveBtn} />
               </div>
          </div>
     )
}
