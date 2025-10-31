import React, { useState } from 'react';
import './styles.css';

const ListNetwork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nearby' | 'recommended' | 'recent' | 'favorite'>('nearby');
  const [viewMode, setViewMode] = useState<'public' | 'private'>('public');

  return (
    <div className="list-network-container">
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
            <button className="control-button">📡</button>
            <button className="control-button">□</button>
            <button className="control-button">☰</button>
          </div>
        </div>
      </div>
      
      {/* Lista de estações */}
      <div className="station-list">
        <div className="station-item">
          <img src="/bloco1.png" alt="RB Road Charging Station" className="station-image" />
          <div className="station-info">
            <h3>RB Road Charging Station</h3>
            <p>5th Street, UM Road, UMBOA</p>
            <p>1.0 km</p>
            <div className="station-rating">★★★★★</div>
            <button className="status-button">Status available</button>
          </div>
        </div>
        
        <div className="station-item">
          <img src="/bloco2.png" alt="Subway Charging Station" className="station-image" />
          <div className="station-info">
            <h3>Subway Charging Station</h3>
            <p>10th Cross, UMBOA</p>
            <p>1.0 km</p>
            <div className="station-rating">★★★★★</div>
            <button className="status-button">Charging Station</button>
          </div>
        </div>
        
        <div className="station-item">
          <img src="/bloco3.png" alt="Charles Charging Road" className="station-image" />
          <div className="station-info">
            <h3>Charles Charging Road</h3>
            <p>101 VB Street, Simple Road, Figma City, US UMBOA</p>
            <p>1.0 km</p>
            <div className="station-rating">★★★★★</div>
            <button className="status-button">Status available</button>
          </div>
        </div>
        
        <button className="load-more">LOAD MORE &gt;</button>
      </div>
    </div>
  );
};

export default ListNetwork;