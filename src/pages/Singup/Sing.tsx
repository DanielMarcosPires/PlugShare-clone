import React from 'react'
import './Style.css'

export default function Sing() {
  return (
    <div className="signup-container">
      <h1>Welcome to WROOM</h1>
      
      <div className="input-container">
        <div className="input-field">
          <span className="icon">👤</span>
          <input type="text" placeholder="Name" />
        </div>
        
        <div className="input-field">
          <span className="icon">📱</span>
          <input type="tel" placeholder="Mobile Number" />
        </div>
        
        <div className="input-field">
          <span className="icon">✉️</span>
          <input type="email" placeholder="Email" />
        </div>
      </div>
      
      <button className="register-btn">REGISTER NOW</button>
      
      <div className="skip-option">
        <a href="#">Skip for Now &gt;&gt;</a>
      </div>
      
      <div className="terms-checkbox">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">Accept all the requirements that we have provided.</label>
      </div>
      
      <div className="divider">
        <span>Or continue with</span>
      </div>
      
      <div className="social-login">
        <button className="social-btn google">
          G
        </button>
        <button className="social-btn apple">
          A
        </button>
        <button className="social-btn facebook">
          f
        </button>
      </div>
      
      <div className="login-link">
        <p>Already registered? <a href="#">Sign In</a></p>
      </div>
    </div>
  )
}
