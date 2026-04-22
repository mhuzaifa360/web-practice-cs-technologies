import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";


export default function Login() {
    const [state,setState] = useState(false)
  return (
    <div className='home-page'>
        {
            state && <TransparentLayout />
        }
        <button className='btn' onClick={()=>setState(true)}> Login</button>
        
    </div>
  )
}
function TransparentLayout(){
    return(
        <div className='transparent-layout'>
            <LoginComponent />
        </div>
    )
}
function LoginComponent(){
    return(
        <div className='login-component'>
            {/* <RxCross2 /> */}

            <h3>Password</h3>
            <h3>Phone Number</h3>
            
            <form action="">
                <input type="email" />
                <input type="password" name="" id="" />
            </form>
            <a href="">Forget Password</a>
            <button>Login</button>
            <p>Don't have an account?</p>
            <a href="">Sign Up</a>
        </div>
    )
}