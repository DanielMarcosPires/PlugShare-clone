
import { useNavigate } from 'react-router-dom';
import './styles.css';

export function AddEvVehicle() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddSearchStations = () => {
    navigate('/dashboard');
  };

  return (
    <div className="add-ev-vehicle-container">
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          ←
        </button>
        <h1>ADD EV VEHICLE</h1>
      </div>

      <div className="form-fields">
        <input type="text" placeholder="Car Maker" className="input-field" />
        <input type="text" placeholder="Car Model" className="input-field" />
        <input type="text" placeholder="VIN" className="input-field" />
        <input type="text" placeholder="Vehicle Registration Number" className="input-field" />
        <input type="text" placeholder="Battery Capacity" className="input-field" />
      </div>
      
      <div className="section-title">
        <h2>PLUG IN TYPE</h2>
      </div>

      <div className="plug-icons">
        <div className="plug-icon">
          <img src="/chargerStation.svg" alt="Plug Type 1" />
        </div>
        <div className="plug-icon">
          <img src="/chargerStation.svg" alt="Plug Type 2" />
        </div>
        <div className="plug-icon">
          <img src="/chargerStation.svg" alt="Plug Type 3" />
        </div>
        <div className="plug-icon">
          <img src="/chargerStation.svg" alt="Plug Type 4" />
        </div>
        <div className="plug-icon">
          <img src="/chargerStation.svg" alt="Plug Type 5" />
        </div>
        <div className="plug-icon">
          <img src="/chargerStation.svg" alt="Plug Type 6" />
        </div>
        <div className="plug-icon">
          <img src="/chargerStation.svg" alt="Plug Type 7" />
        </div>
      </div>

      <div className="section-title">
        <h2>YOUR VEHICLE</h2>
      </div>

      <div className="vehicle-image">
        <img src="/car-azul2.png" alt="Vehicle" />
      </div>

      <div className="terms">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Accept all the requirements that we have provided.
        </label>
      </div>

      <button className="add-search-button" onClick={handleAddSearchStations}>ADD & SEARCH STATIONS</button>
    </div>
  );
}