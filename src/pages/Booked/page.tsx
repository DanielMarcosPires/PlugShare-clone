import { useNavigate } from 'react-router-dom';
import './styles.css';

export function Booked() {
  const navigate = useNavigate();

  const handleGetRoute = () => {
    // Lógica para obter rota
    console.log('Obtendo rota...');
  };

  const handleAccessStation = () => {
    // Lógica para acessar estação
    console.log('Acessando estação de carregamento...');
  };

  const handleClose = () => {
    navigate('/dashboard'); // Ou rota desejada
  };

  return (
    <div className="booked-container">
      <div className="confirmation-card">
        <div className="checkmark">✓</div>
        <h2>Confirmation Successful</h2>
        <p>Order Placed Successful</p>
        
        <ul className="station-info">
          <li className="station-info-item">
            <span>Station</span>
            <p>
              <strong>BR Road Charging Station</strong>
            </p>
          </li>
          <li className="station-info-item">
            <span>Start Time</span>
            <p className='time'>17 Nov, 2023, 10:45 am</p>
          </li>
          <li className="station-info-item">
            <span>Duration</span>
            <p>1hr 30min</p>
          </li>
          <li className="station-info-item">
            <span>Total</span>
            <p className='price'>$7.50</p>
          </li>
          <li className="station-info-item">
            <span>Pay via</span>
            <p>Credit Card</p>
          </li>
        </ul>
        
        <button className="route-button" onClick={handleGetRoute}>
          GET A ROUTE
        </button>
        <button className="access-button" onClick={handleAccessStation}>
          ACCESS CHARGING STATION
        </button>
      </div>
      
      <button className="close-button" onClick={handleClose}>
        ×
      </button>
    </div>
  );
}