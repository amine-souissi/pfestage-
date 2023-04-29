import * as React from 'react';
import {useState} from 'react' ; 
import {Registerfunc} from "../pfeBackend/dbCommands.js";


export default function Register() {
    const [phonenumber,Setphonenumber] = useState("")
    const [loginStatus,SetloginStatus] = useState(false)
    const [btnClicked,SetbtnClicked] = useState(false)

    const handleRegister = (() =>{
    // this to tell if we did a checkin
    SetbtnClicked(true)
    // now compare the email and password in the backend to see if it is correct or not 
    // return true or false
    SetloginStatus(false)

    Registerfunc(phonenumber) ;
    
    return 0 ;
  })

  return (
    <div className='Register'>


      <div className='phonenumber'> phone number :</div>     
      <input  type='text' className='phonenumberinput'  onChange={(e) => {Setphonenumber(e.target.value)}}/>  

      <button className='btnRegister' onClick={(e) => {handleRegister()}}>Register</button>  
          
    </div>
  );
}