import './styles.css'
import { useState } from 'react'

export default function CarBrandVa() {
  const [selectedColor, setSelectedColor] = useState('red')

  const colorOptions = [
    { id: 'gray', name: 'Cinza', color: '#9CA3AF' },
    { id: 'red', name: 'Vermelho', color: '#DC2626' },
    { id: 'black', name: 'Preto', color: '#1F2937' },
    { id: 'blue', name: 'Azul', color: '#1E40AF' }
  ]

  const getCarImage = (color: string) => {
    switch (color) {
      case 'red':
        return '/carro vermelho.png'
      case 'blue':
        return '/carro.png'
      case 'black':
        return '/carro.png'
      case 'gray':
        return '/carro.png'
      default:
        return '/carro vermelho.png'
    }
  }

  return (
    <div className="cbv-container">
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

      {/* Seção dos carros */}
      <div className="cbv-cars-section">
        {/* Carros em diferentes posições */}
        <div className="cbv-cars-container">
          {/* Carro da esquerda (azul) */}
          <div className="cbv-car-left">
            <img 
              src={getCarImage('blue')} 
              alt="KIA EV6 Azul" 
              className="cbv-car-image-left" 
            />
          </div>
          
          {/* Carro principal (vermelho) */}
          <div className="cbv-car-main">
            <img 
              src={getCarImage(selectedColor)} 
              alt="KIA EV6" 
              className="cbv-car-image-main" 
            />
          </div>
          
          {/* Carro da direita (branco) */}
          <div className="cbv-car-right">
            <img 
              src={getCarImage('white')} 
              alt="KIA EV6 Branco" 
              className="cbv-car-image-right" 
            />
          </div>
        </div>
      </div>

      {/* Seção do título */}
      <div className="cbv-title-section">
        <h1 className="cbv-main-title">KIA EV6</h1>
      </div>

      {/* Seletor de cores */}
      <div className="cbv-color-selector">
        {colorOptions.map((option) => (
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
    </div>
  )
}
