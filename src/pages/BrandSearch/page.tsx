import './styles.css'

export default function BrandSearch() {
  return (
    <div className="bs-container">
      <div className="bs-header">
        <span className="bs-back">↩</span>
        <img src="/carros2.png" alt="Logo da marca" className="bs-brand" />
      </div>

      <div className="bs-list">
        <div className="bs-item">
          <div className="bs-texts">
            <div className="bs-title">KIA EV6</div>
            <div className="bs-sub">WARRANTS +</div>
          </div>
          <img src="/carro.png" alt="KIA EV6" className="bs-car" />
        </div>

        <div className="bs-item">
          <div className="bs-texts">
            <div className="bs-title">KIA SELTOS</div>
            <div className="bs-sub">WARRANTS +</div>
          </div>
          <img src="/SUV.png" alt="KIA Seltos" className="bs-car" />
        </div>

        <div className="bs-item">
          <div className="bs-texts">
            <div className="bs-title">KIA SELTOS</div>
            <div className="bs-sub">WARRANTS +</div>
          </div>
          <img src="/carro laranja.png" alt="KIA Seltos" className="bs-car" />
        </div>
      </div>

      <div className="bs-bottom">
        <div className="bs-circle">🏠</div>
        <div className="bs-circle">⚡</div>
        <div className="bs-circle">🔔</div>
      </div>
    </div>
  )
}
