import "./styles.css";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Home, Zap } from "lucide-react";

export default function BrandSearch() {
  return (
    <main className="bs-container">
      <header className="bs-header-row">
        <Link to={"/dashboard"} className="bs-back">
          <ArrowLeft size={30} />
        </Link>
        <div className="bs-header-logo">
          <img src="/logo.png" alt="Logo da Kia" className="bs-kia-logo" />
          <div className="bs-kia-slogan">
            EXPERIENCE{" "}
            <span className="bs-kia-light">Movement that inspires</span>
          </div>
        </div>
      </header>
      <div className="bs-list">
        <div className="bs-item">
          <div className="bs-texts">
            <div className="bs-title">KIA EV6</div>
            <div className="bs-sub">Varients +</div>
          </div>
          <div className="bs-car-wrap">
            <img src="/carro.png" alt="KIA EV6" className="bs-car" />
            <span className="bs-cab">cab</span>
          </div>
        </div>
        <div className="bs-item">
          <div className="bs-texts">
            <div className="bs-title">KIA SELTOS</div>
            <div className="bs-sub">Varients +</div>
          </div>
          <div className="bs-car-wrap">
            <img src="/SUV.png" alt="KIA Seltos" className="bs-car" />
            <span className="bs-cab">cab</span>
          </div>
        </div>
        <div className="bs-item">
          <div className="bs-texts">
            <div className="bs-title">KIA SELTOS</div>
            <div className="bs-sub">Varients +</div>
          </div>
          <div className="bs-car-wrap">
            <img src="/carro laranja.png" alt="KIA Seltos" className="bs-car" />
            <span className="bs-cab">cab</span>
          </div>
        </div>
      </div>
      <div className="bs-curve-border"></div>
      <div className="bs-bottom">
        <Link to={"/dashboard"} className="bs-circle" aria-label="home">
          <Home />
        </Link>
        <button className="bs-circle" aria-label="energia">
          <Zap />
        </button>
        <button className="bs-circle" aria-label="notificacoes">
          <Bell />
        </button>
      </div>
    </main>
  );
}
