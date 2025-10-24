import './styles.css'

export default function CarDetail() {
  return (
    <div className="cd-container">
      <div className="cd-header">
        <span className="cd-back">←</span>
        <img src="/logo.png" alt="KIA Logo" className="cd-logo" />
      </div>
      <img src="/carro vermelho.png" alt="KIA EV6" className="cd-car-image" />
      <div className="cd-info">
        <h1 className="cd-title">KIA EV6</h1>
        <p className="cd-price">$45.00 On-Road Price in Delhi</p>
        <div className="cd-rating">★★★★★</div>
        <div className="cd-colors">
          <div className="cd-color" style={{background: '#000'}}></div>
          <div className="cd-color" style={{background: '#ff0000'}}></div>
          <div className="cd-color" style={{background: '#yellow'}}></div>
        </div>
      </div>
      <div className="cd-specs">
        <div className="cd-spec">VARIANT</div>
        <div className="cd-spec">ENGINE TYPE</div>
        <div className="cd-spec">200 mph</div>
        <div className="cd-spec">199 sec</div>
        <div className="cd-spec">4WD</div>
      </div>
      <div className="cd-variants">
        <div className="cd-variant">
          <p>EV6 GT Line Electric</p>
          <p>$45.800* Get On Road Price →</p>
        </div>
        <div className="cd-variant">
          <p>EV6 GT Line AWD</p>
          <p>$45.800* Get On Road Price →</p>
        </div>
      </div>
      <div className="cd-detail">IN DETAIL</div>
      <div className="cd-buttons">
        <button className="cd-button cd-test-drive">Book Test Drive</button>
        <button className="cd-button cd-buy">Buy Now</button>
      </div>
    </div>
  )
}