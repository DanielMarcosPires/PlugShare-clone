import { useState } from 'react'
import OtpInput from 'react-otp-input'
import './style.css'

export default function InputOtp() {
  const [otp, setOtp] = useState('');
  
  return (
    <OtpInput
      onChange={setOtp}
      value={otp}
      renderSeparator={() => <span>-</span>}
      renderInput={(props) => <input {...props} className="otpinput" />}
      numInputs={4}
    />
  )
}
