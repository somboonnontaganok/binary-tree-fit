import React from 'react'
import './LoginNew.css'

function LoginNew() {
  return (
    <div className="loginpage">
      <div className="username">
        <h4>Username</h4>
        <input className="input-username" type="text" />
      </div>
      <div className="password">
        <h4>Password</h4>
        <input className="input-password" type="password" />
      </div>
      <div className="btn">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
        <hr />
      <div className="btn-login-google">
        <button className="google" >Log in with Google</button>
      </div>
      <div className="btn-login-facebook">
        <button className="facebook">Log in with Facebook</button>
      </div>
    </div>
  )
}

export default LoginNew