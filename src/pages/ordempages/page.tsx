import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export function OrderDetails() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('Cards');
  const [selectedWallet, setSelectedWallet] = useState('Cash');

  const handleBack = () => {
    navigate(-1);
  };

  const handleRemove = () => {
    // Lógica para remover o item
    console.log('Item removido');
  };

  const handleViewMoreOffers = () => {
    // Lógica para ver mais ofertas
    console.log('Ver mais ofertas');
  };

  const handlePayment = () => {
    // Lógica para processar pagamento
    console.log('Processando pagamento...');
  };

  return (
    <div className="order-details-container">
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          ←
        </button>
        <h1>Order Details</h1>
      </div>

      <div className="order-info">
        <div className="order-id">
          <span className="order-label">ORDER ID: 60068834</span>
          <button className="remove-button" onClick={handleRemove}>
            Remove
          </button>
        </div>
        
        <div className="station-info">
          <div className="station-details">
            <span className="station-name">Subway Charging</span>
            <span className="duration">Duration: 3hr 30min</span>
          </div>
          <div className="total-price">$8.50</div>
        </div>

        <div className="charging-item">
          <div className="item-info">
            <span className="item-number">408</span>
            <span className="item-name">Cobra Applied</span>
            <div className="heart-icon">♥</div>
          </div>
          <div className="item-price">$8.50</div>
        </div>

        <button className="view-offers-button" onClick={handleViewMoreOffers}>
          View More Offers
        </button>
      </div>

      <div className="bill-details">
        <h3>Bill details</h3>
        <div className="bill-item">
          <span>Order Total</span>
          <span>$8.50</span>
        </div>
        <div className="bill-item">
          <span>Coupon Applied</span>
          <span className="discount">-$1.00</span>
        </div>
        <div className="bill-item total">
          <span>Total</span>
          <span>$7.50</span>
        </div>
      </div>

      <div className="payment-section">
        <h3>Payment</h3>
        
        <div className="payment-method">
          <div className="method-header" onClick={() => setSelectedPayment(selectedPayment === 'Cards' ? '' : 'Cards')}>
            <span>Cards</span>
            <span className="arrow">^</span>
          </div>
          
          {selectedPayment === 'Cards' && (
            <div className="card-form">
              <input
                type="text"
                placeholder="Card Holder Name"
                className="card-input"
              />
              <input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="card-input"
              />
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="card-input"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="card-input"
              />
            </div>
          )}
        </div>

        <div className="payment-method">
          <div className="method-header" onClick={() => setSelectedWallet(selectedWallet === 'Cash' ? '' : 'Cash')}>
            <span>Wallet</span>
            <span className="arrow">v</span>
          </div>
          
          {selectedWallet === 'Cash' && (
            <div className="wallet-options">
              <div className="wallet-option">
                <span>Cash</span>
              </div>
              <div className="wallet-option">
                <span>GPay</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <button className="payment-button" onClick={handlePayment}>
        PAYMENT
      </button>
    </div>
  );
}