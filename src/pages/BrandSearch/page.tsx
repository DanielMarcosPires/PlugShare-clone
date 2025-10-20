import './styles.css'

export default function BrandSearch() {
  return (
    <div className="bs-container">
      <div className="bs-header">
        <span className="bs-back">↩</span>
        <img src="/logo.png" alt="Logo da marca" className="bs-brand" />
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

      <div className="bs-curve-border"></div>
      <div className="bs-bottom">
        <div className="bs-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <div className="bs-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </div>
        <div className="bs-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            <circle cx="18" cy="6" r="3"></circle>
          </svg>
        </div>
      </div>
    </div>
  )
}
