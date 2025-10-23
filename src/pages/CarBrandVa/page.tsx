import './styles.css'
import { useState, useEffect } from 'react'
import { Heart, Zap, Bell, Home, ChevronLeft, ChevronRight } from "lucide-react";

export default function CarBrandVa() {
  const [selectedColor, setSelectedColor] = useState('vermelho')
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentCarIndex, setCurrentCarIndex] = useState(0)

  const carModels = [
    {
      id: 'ev6',
      name: 'KIA EV6',
      price: '$45,000',
      colors: [
        { id: 'vermelho', name: 'Vermelho', color: '#DC2626', image: '/car-vermelho.png', backgroundColor: '#DC2626' },
        { id: 'azul', name: 'Azul', color: '#1E40AF', image: '/car-azul2.png', backgroundColor: '#1E40AF' },
        { id: 'branco', name: 'Branco', color: '#F9FAFB', image: '/car-branco2.png', backgroundColor: '#F9FAFB' }
      ]
    },
    {
      id: 'soul',
      name: 'KIA Soul',
      price: '$38,000',
      colors: [
        { id: 'vermelho', name: 'Vermelho', color: '#DC2626', image: '/car-vermelho.png', backgroundColor: '#DC2626' },
        { id: 'azul', name: 'Azul', color: '#1E40AF', image: '/car-azul2.png', backgroundColor: '#1E40AF' },
        { id: 'branco', name: 'Branco', color: '#F9FAFB', image: '/car-branco2.png', backgroundColor: '#F9FAFB' }
      ]
    },
    {
      id: 'sportage',
      name: 'KIA Sportage',
      price: '$42,000',
      colors: [
        { id: 'vermelho', name: 'Vermelho', color: '#DC2626', image: '/car-vermelho.png', backgroundColor: '#DC2626' },
        { id: 'azul', name: 'Azul', color: '#1E40AF', image: '/car-azul2.png', backgroundColor: '#1E40AF' },
        { id: 'branco', name: 'Branco', color: '#F9FAFB', image: '/car-branco2.png', backgroundColor: '#F9FAFB' }
      ]
    }
  ]

  const currentCar = carModels[currentCarIndex]
  const currentColor = currentCar.colors.find(color => color.id === selectedColor) || currentCar.colors[0]

  const carSpecs = [
    { label: 'Range', value: '450 km' },
    { label: '0-100 km/h', value: '4.2s' },
    { label: 'Top Speed', value: '220 km/h' },
    { label: 'Power', value: '320 HP' }
  ]

  // Reset selected color when changing car model
  useEffect(() => {
    setSelectedColor(currentCar.colors[0].id)
  }, [currentCarIndex])

  const goToPreviousCar = () => {
    setCurrentCarIndex(prev => (prev === 0 ? carModels.length - 1 : prev - 1))
  }

  const goToNextCar = () => {
    setCurrentCarIndex(prev => (prev === carModels.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="cbv-container" style={{ background: currentColor.backgroundColor }}>
      {/* Header com botão voltar e logo */}
      <div className="cbv-header">
        <button className="cbv-back-btn" onClick={() => window.history.back()}>
          ←
        </button>
        <div className="cbv-logo-section">
          <img src="/logo.png" alt="KIA Logo" className="cbv-logo" />
          <div className="cbv-slogan">EXPERIENCE <span className="cbv-slogan-light">Movement that inspires</span></div>
        </div>
      </div>

      {/* Carrossel de carros */}
      <div className="cbv-carousel-section">
        <button className="cbv-carousel-btn cbv-carousel-btn-left" onClick={goToPreviousCar}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="cbv-car-display">
          <img 
            src={currentColor.image} 
            alt={`${currentCar.name} ${currentColor.name}`} 
            className="cbv-car-image-main" 
          />
        </div>
        
        <button className="cbv-carousel-btn cbv-carousel-btn-right" onClick={goToNextCar}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicadores do carrossel */}
      <div className="cbv-carousel-indicators">
        {carModels.map((_, index) => (
          <div 
            key={index} 
            className={`cbv-indicator ${index === currentCarIndex ? 'cbv-indicator-active' : ''}`}
          />
        ))}
      </div>

      {/* Seção do título */}
      <div className="cbv-title-section">
        <h1 className="cbv-main-title">{currentCar.name}</h1>
        <div className="cbv-price-section">
          <span className="cbv-price">{currentCar.price}</span>
          <button 
            className={`cbv-favorite-btn ${isFavorite ? 'cbv-favorite-active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Seletor de cores */}
      <div className="cbv-color-selector">
        {currentCar.colors.map((option) => (
          <button
            key={option.id}
            className={`cbv-color-option ${selectedColor === option.id ? 'cbv-color-selected' : ''}`}
            onClick={() => setSelectedColor(option.id)}
            style={{ backgroundColor: option.color }}
            aria-label={`Selecionar cor ${option.name}`}
          >
            {selectedColor === option.id && (
              <div className="cbv-color-check">✓</div>
            )}
          </button>
        ))}
      </div>

      {/* Especificações do carro */}
      <div className="cbv-specs-section">
        <h2 className="cbv-specs-title">Specifications</h2>
        <div className="cbv-specs-grid">
          {carSpecs.map((spec, index) => (
            <div key={index} className="cbv-spec-item">
              <span className="cbv-spec-label">{spec.label}</span>
              <span className="cbv-spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Botão de ação */}
      <div className="cbv-actions">
        <button className="cbv-primary-btn">Reserve Now</button>
        <button className="cbv-secondary-btn">Compare</button>
      </div>

      {/* Barra inferior */}
      <div className="cbv-bottom-bar">
        <Home size={24} className="cbv-bottom-icon" />
        <Zap size={24} className="cbv-bottom-icon" />
        <Bell size={24} className="cbv-bottom-icon" />
      </div>
    </div>
  )
}