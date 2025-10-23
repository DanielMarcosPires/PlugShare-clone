import './styles.css'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function CarBrandVisitantes() {
  const [selectedModelIndex, setSelectedModelIndex] = useState(0)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [favorites, setFavorites] = useState<boolean[]>([])

  // Mock data for car models
  const carModels = [
    {
      id: 1,
      name: 'KIA EV6',
      brand: 'KIA',
      price: '$45,000',
      colors: [
        { name: 'Vermelho', value: '#FF0000', image: '/car-vermelho.png' },
        { name: 'Azul', value: '#0000FF', image: '/car-azul2.png' },
        { name: 'Branco', value: '#FFFFFF', image: '/car-branco2.png' },
        { name: 'Preto', value: '#000000', image: '/carro.png' }
      ]
    },
    {
      id: 2,
      name: 'Tesla Model 3',
      brand: 'Tesla',
      price: '$38,000',
      colors: [
        { name: 'Branco', value: '#FFFFFF', image: '/car-branco2.png' },
        { name: 'Preto', value: '#000000', image: '/carro.png' },
        { name: 'Vermelho', value: '#FF0000', image: '/car-vermelho.png' },
        { name: 'Azul', value: '#0000FF', image: '/car-azul2.png' }
      ]
    },
    {
      id: 3,
      name: 'Nissan Ariya',
      brand: 'Nissan',
      price: '$42,000',
      colors: [
        { name: 'Preto', value: '#000000', image: '/carro.png' },
        { name: 'Branco', value: '#FFFFFF', image: '/car-branco2.png' },
        { name: 'Vermelho', value: '#FF0000', image: '/car-vermelho.png' },
        { name: 'Azul', value: '#0000FF', image: '/car-azul2.png' }
      ]
    }
  ]

  const currentModel = carModels[selectedModelIndex]
  const currentColor = currentModel.colors[selectedColorIndex]

  // Function to get background color based on selected color
  const getBackgroundColor = () => {
    // Convert hex to rgba with some transparency for a softer background
    const hex = currentColor.value.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Return rgba with 15% opacity for a more visible background effect
    return `rgba(${r}, ${g}, ${b}, 0.15)`;
  }

  const handlePreviousModel = () => {
    setSelectedModelIndex(prev => 
      prev === 0 ? carModels.length - 1 : prev - 1
    )
    setSelectedColorIndex(0) // Reset color when changing model
  }

  const handleNextModel = () => {
    setSelectedModelIndex(prev => 
      prev === carModels.length - 1 ? 0 : prev + 1
    )
    setSelectedColorIndex(0) // Reset color when changing model
  }

  const toggleFavorite = (index: number) => {
    const newFavorites = [...favorites]
    newFavorites[index] = !newFavorites[index]
    setFavorites(newFavorites)
  }

  return (
    <div className="cbv-container" style={{ backgroundColor: getBackgroundColor() }}>
      {/* Header */}
      <div className="cbv-header">
        <h1 className="cbv-title">Modelos Disponíveis</h1>
      </div>

      {/* Model carousel */}
      <div className="cbv-model-section">
        <button className="cbv-carousel-btn cbv-carousel-btn-left" onClick={handlePreviousModel}>
          <ChevronLeft size={24} />
        </button>
        
        <div className="cbv-model-info">
          <div className="cbv-brand">{currentModel.brand}</div>
          <h2 className="cbv-model-name">{currentModel.name}</h2>
          <div className="cbv-price">{currentModel.price}</div>
        </div>
        
        <button className="cbv-carousel-btn cbv-carousel-btn-right" onClick={handleNextModel}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Car image */}
      <div className="cbv-image-container">
        <img 
          src={currentColor.image} 
          alt={`${currentModel.name} - ${currentColor.name}`} 
          className="cbv-car-image" 
        />
        <button 
          className={`cbv-favorite-btn ${favorites[selectedModelIndex] ? 'cbv-favorite-active' : ''}`}
          onClick={() => toggleFavorite(selectedModelIndex)}
        >
          <Heart size={24} />
        </button>
      </div>

      {/* Color selector */}
      <div className="cbv-color-section">
        <h3 className="cbv-section-title">Cores Disponíveis</h3>
        <div className="cbv-colors-grid">
          {currentModel.colors.map((color, index) => (
            <div 
              key={index} 
              className={`cbv-color-item ${index === selectedColorIndex ? 'cbv-color-selected' : ''}`}
              onClick={() => setSelectedColorIndex(index)}
            >
              <div 
                className="cbv-color-swatch" 
                style={{ backgroundColor: color.value }}
              ></div>
              <span className="cbv-color-name">{color.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Model indicators */}
      <div className="cbv-model-indicators">
        {carModels.map((_, index) => (
          <div 
            key={index} 
            className={`cbv-indicator ${index === selectedModelIndex ? 'cbv-indicator-active' : ''}`}
            onClick={() => {
              setSelectedModelIndex(index)
              setSelectedColorIndex(0) // Reset color when changing model
            }}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="cbv-actions">
        <button className="cbv-primary-btn">Agendar Test Drive</button>
        <button className="cbv-secondary-btn">Ver Detalhes</button>
      </div>
    </div>
  )
}