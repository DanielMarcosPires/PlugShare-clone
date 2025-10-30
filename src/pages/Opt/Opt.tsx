import { useRef, useState } from 'react';
import './Opt.css';
import InputOtp from '../../components/Input-otp-react/Input-otp';

const Opt = () => {
  const [otp, setOtp] = useState<string[]>(['1', '9', '2', '3']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  const handleResendOtp = () => {
    // Lógica para reenviar o código OTP
    console.log('Reenviando código OTP');
  };

  const handleVerify = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    // Lógica para verificar o código OTP
    console.log('Verificando código:', otp.join(''));
  };

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 1);
    setOtp(prev => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
    if (val && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-illustration">
        <img src="/capa3.png" alt="Ilustração de verificação OTP" />
      </div>
      
      <div className="otp-content">
        <h1>Enter 4-digit<br />Verification code</h1>
        
        <p className="otp-description">
          Code sent to +55 (67) **** card to your registered email. This code will expire in 10:00
        </p>
        
        <form className="otp-form" onSubmit={handleVerify}>
          <div className="otp-digits">
            <InputOtp />
          </div>

          <button type="button" className="resend-button" onClick={handleResendOtp}>
            Resend OTP
          </button>
          
          <button type="submit" className="verify-button">
            VERIFY
          </button>
        </form>
      </div>
    </div>
  );
};

export default Opt;