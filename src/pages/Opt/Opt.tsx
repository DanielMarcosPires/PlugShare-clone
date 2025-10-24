import React, { useState, useRef, useEffect } from 'react'
import './Style.css'

export default function Opt() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  const handleChange = (index, value) => {
    // Permitir apenas números
    if (value && !/^\d+$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Mover para o próximo campo se o atual foi preenchido
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  
  const handleKeyDown = (index, e) => {
    // Mover para o campo anterior ao pressionar backspace em um campo vazio
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
  
  return (
    <div className="opt-container">
      <div className="opt-image">
        <img src="/public/titulopt3.png" alt="Verification" />
      </div>
      
      <h1>Enter 4-digit<br />Verification code</h1>
      
      <p className="opt-description">
        Code send to +91 82****89 and to your registered email. This code will expired in 01:30
      </p>
      
      <div className="code-inputs">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            className="code-box"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>
      
      <button className="resend-btn">Resend OTP</button>
      
      <button className="verify-btn">VERIFY</button>
    </div>
  )
}