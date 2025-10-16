
import { useState } from "react";
import { Heart, Home, Zap, Bell, SlidersHorizontal } from "lucide-react";
import './styles.css';

export default function App() {
  const carsData = [
    { id: 1, name: "KIA EV", price: 45000, img: "/carro.png", rating: 4.5, new: true },
    { id: 2, name: "BENTLY EO1", price: 990000, img: "/carro vermelho.png", rating: 4.7 },
    { id: 3, name: "NISSA EQ Z1", price: 200000, img: "/SUV.png", rating: 4.4 },
    { id: 4, name: "FERRARI EVF1", price: 850900, img: "/carro laranja.png", rating: 5 },
  ];

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredCars = carsData.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bc-container">
      {/* 🔍 Barra de busca */}
      <div className="bc-searchBar">
        <input
          type="text"
          placeholder="I am looking for"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bc-searchInput"
        />
      </div>

      {/* ⚙️ Filtros */}
      <div className="bc-filtersBar">
        <div className="bc-tags">
          {["Range", "Speed", "Luxury", "Utility"].map((tag) => (
            <span
              key={tag}
              className="bc-tag"
            >
              {tag}
            </span>
          ))}
        </div>
        <SlidersHorizontal size={20} className="bc-sliderIcon" />
      </div>

      {/* 🚗 Lista de carros */}
      <div className="bc-grid">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="bc-card"
          >
            {car.new && (
              <span className="bc-newBadge">
                NEW
              </span>
            )}
            <img
              src={car.img}
              alt={car.name}
              className="bc-carImg"
            />
            <div className="bc-carName">{car.name}</div>
            <div className="bc-rating">
              ⭐ {car.rating.toFixed(1)}
            </div>
            <div className="bc-cardFooter">
              <div className="bc-price">${car.price.toLocaleString()}</div>
              <button onClick={() => toggleFavorite(car.id)} className="bc-favoriteBtn">
                <Heart
                  size={18}
                  className={favorites.includes(car.id) ? 'bc-heartActive' : 'bc-heart'}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
       
      {/* 📸 Modelo de carro (acima da barra amarela) */}
      <div className="bc-modeloWrapper">
        <img src="/modeloCarro.png" alt="modelo" className="bc-modeloImg" />
      </div>

      {/* ⚡ Barra inferior */}
      <div className="bc-bottomBar">
        <Home size={24} className="bc-bottomIcon" />
        <Zap size={24} className="bc-bottomIcon" />
        <Bell size={24} className="bc-bottomIcon" />
      </div>
    </div>
  );
}
