import * as React from 'react';
import {useState} from 'react' ; 
import {Loginfunc} from "../pfeBackend/dbCommands.js";

export default function SignIn() {
  const [getphonenumber,Setphonenumber] = useState("")
  const [getPass,SetgetPass] = useState("")
  const [loginStatus,SetloginStatus] = useState(false)
  const [btnClicked,SetbtnClicked] = useState(false)

  const handleLogin = (() =>{
    // this to tell if we did a checkin
    SetbtnClicked(true)
    // now compare the email and password in the backend to see if it is correct or not 
    // return true or false
    SetloginStatus(false) ;
    Loginfunc(getphonenumber , getPass) ;
    
    return 0 ;
  })

  return (
    <div className='Signin'>
      {(!loginStatus && btnClicked) && <div className='checklogin'> username or password are incorrect please retry</div>}

      <div className='phonenumber'> phone number :</div>     
      <input  type='text' className='emailinput'  onChange={(e) => {Setphonenumber(e.target.value)}}/>  

      <div className='pass'> password :</div>     
      <input  type='password' className='passinput'  onChange={(e) => {SetgetPass(e.target.value)}}/>

      <button className='btnSign' onClick={(e) => {handleLogin()}}>Sign In</button>  
          
    </div>
  );
}