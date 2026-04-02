import React from 'react'

export default function LoginSignup() {

    // let login = true;
    let login = false;
  return (
      <div className='container'>
      {/* {login ? "correct" : 'incorect'} */}
        {login ? 
        <Login 
        isLogin= {login}
        formName='Login'
        emailName='Email'
        passwordName='Password'
        btnName='Sign In'
        linkForBtn='Forget password?'
        statement='Do not have an account'
        loginOrSignUp='Create an account'
        /> 
        : <Login 
        formName='Create an account'
        emailName='Email'
        passwordName='Create your password'
        btnName='Create Account'
        linkForBtn=''
        statement='Already have an account'
        loginOrSignUp='Sign In'
        />}     
    </div>
  )
}
function Login(props) {
  return (
    <div className='login box'>
      <h2>{props.formName}</h2>
      <form action="">
        <label htmlFor="Email">{props.emailName}</label>
            <input type="Email" />
        
        <label htmlFor="Password">{props.passwordName} </label>
            <input type="password" />
       
      </form>
        {/* <button className='sign-btn'>{props.isLogin ? "Login" : "Sign Up"}</button> */}
        <button className='sign-btn'>{props.btnName}</button>
      <a href="#">{props.linkForBtn}</a>
      <p>{props.statement}</p>
      <a href="">{props.loginOrSignUp}</a>
    </div>
  )
}


