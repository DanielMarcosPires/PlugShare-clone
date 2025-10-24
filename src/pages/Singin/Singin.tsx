import React from 'react'
import './Style.css'

export default function Singin() {
  return (
    <div className="signin-container">
      <div className="illustration">
        <img src="/public/titulopt3.png" alt="Conversation" className="conversation-img" />
      </div>
      
      <h1>Glad to meet you again!</h1>
      
      <div className="input-field">
        <input type="text" placeholder="Email / Mobile Number" />
      </div>
      
      <button className="signin-btn">SIGN IN NOW</button>
      
      <div className="divider">
        <span>Or continue with</span>
      </div>
      
      <div className="social-login">
        <button className="social-btn google">G</button>
        <button className="social-btn apple">A</button>
        <button className="social-btn facebook">f</button>
      </div>
      
      <div className="register-link">
        <p>Not registered yet? <a href="#">Sign Up Now</a></p>
      </div>
    </div>
  )
}