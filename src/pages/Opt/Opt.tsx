import './Opt.css';
import InputOtp from '../../components/Input-otp-react/Input-otp';

const Opt = () => {
  
  const handleResendOtp = () => {
    // Lógica para reenviar o código OTP
    console.log('Reenviando código OTP');
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
        
        <form className="otp-form">
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