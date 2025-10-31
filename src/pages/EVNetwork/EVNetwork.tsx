import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const EVNetwork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nearby' | 'recommended' | 'recent' | 'favorite'>('nearby');
  const [viewMode, setViewMode] = useState<'public' | 'private'>('public');

  return (
    <div className="ev-network-container">
      {/* Barra de pesquisa */}
      <div className="search-bar-container">
        <div className="search-bar">
          <input type="text" placeholder="I am looking for" />
          <button className="search-button">
            <span className="search-icon">⚪</span>
          </button>
        </div>
        
        {/* Abas de navegação */}
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'nearby' ? 'active' : ''}`}
            onClick={() => setActiveTab('nearby')}
          >
            Nearby
          </button>
          <button 
            className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
            onClick={() => setActiveTab('recommended')}
          >
            Recommended
          </button>
          <button 
            className={`tab ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveTab('recent')}
          >
            Recent
          </button>
          <button 
            className={`tab ${activeTab === 'favorite' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorite')}
          >
            Favorite
          </button>
        </div>
        
        {/* Botões de visualização */}
        <div className="view-mode">
          <button 
            className={`view-button ${viewMode === 'public' ? 'active' : ''}`}
            onClick={() => setViewMode('public')}
          >
            Public
          </button>
          <button 
            className={`view-button ${viewMode === 'private' ? 'active' : ''}`}
            onClick={() => setViewMode('private')}
          >
            Private
          </button>
          <div className="view-controls">
            <button className="control-button">◆</button>
            <button className="control-button">≡</button>
            <button className="control-button">☰</button>
          </div>
        </div>
      </div>
      
      {/* Container do mapa com imagem estática */}
      <div className="map-container" style={{ backgroundImage: "url('/MAP%20(1).png')" }}>
        {/* Pins */}
        <div className="pin pin1"></div>
        <div className="pin pin2"></div>
        <div className="pin pin3"></div>
        
        {/* Labels das estações */}
        <div className="station-label label1">
          Charles Charging Station
          <br />
          10.5 km / 25 min
        </div>
        <div className="station-label label2">
          Subway Charging Station
          <br />
          2.5 km / 5 min
        </div>
        <div className="station-label label3">
          RB Road Charging Station
          <br />
          10 km / 2 min
        </div>
        
        {/* Imagem do carro */}
        <img src="/car-vermelho.png" alt="Car" className="car-image" />
      </div>
      
      {/* Botão Home */}
      <Link to="/" className="home-button">
        <span className="home-icon">🏠</span>
      </Link>
    </div>
  );
};

export default EVNetwork;