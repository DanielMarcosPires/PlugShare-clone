import { useState } from "react";
import "./styles.css";

type Station = {
  id: number;
  name: string;
  address1: string;
  address2: string;
  distance: string;
  rating: number;
  image: string;
};

const stations: Station[] = [
  {
    id: 1,
    name: "RB ROAD CHARGING STATION",
    address1: "5th Street, LM Road",
    address2: "XYZ City, US, LM509A",
    distance: "10 Km",
    rating: 4,
    image: "/carros2.png",
  },
  {
    id: 2,
    name: "SUBWAY CHARGING STATION",
    address1: "10th Cross, Ioncer Road",
    address2: "ABC City, US, LM509A",
    distance: "2.5 Km",
    rating: 5,
    image: "/carros2.png",
  },
  {
    id: 3,
    name: "CHARLES CHARGING STATION",
    address1: "101, VB Street, Simple Road",
    address2: "Figma City, US, LM509A",
    distance: "10 Km",
    rating: 4,
    image: "/carros2.png",
  },
];

export function EVNetworkSetView() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="evnsv-container">
      {/* Search bar */}
      <div className="evnsv-search">
        <input className="evnsv-search-input" placeholder="I am looking for" />
        <button className="evnsv-search-icon" aria-label="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button className="evnsv-settings" aria-label="settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="evnsv-tabs">
        {[
          { key: "nearby", label: "Nearby" },
          { key: "recommended", label: "Recommended" },
          { key: "recent", label: "Recent" },
          { key: "favorite", label: "Favorite" },
        ].map(({ key, label }) => (
          <button key={key}>{label}</button>
        ))}
      </div>

      {/* Chips + small icon actions */}
      <div className="evnsv-chiprow">
        <button
          className={`evnsv-chip ${isPublic ? "on" : ""}`}
          onClick={() => setIsPublic(true)}
        >
          Public
        </button>
        <button
          className={`evnsv-chip ${!isPublic ? "on" : ""}`}
          onClick={() => setIsPublic(false)}
        >
          Private
        </button>
        <div className="evnsv-icons">
          <button className="evnsv-icbtn" aria-label="filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12 10 19 14 21 14 12 22 3"></polygon>
            </svg>
          </button>
          <button className="evnsv-icbtn" aria-label="sort">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h13"></path>
              <path d="M3 12h9"></path>
              <path d="M3 18h5"></path>
              <path d="M19 6v12"></path>
              <path d="M22 9l-3-3-3 3"></path>
            </svg>
          </button>
          <button className="evnsv-icbtn" aria-label="wifi">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <circle cx="12" cy="20" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>

      {/* Cards list */}
      <div className="evnsv-list">
        {stations.map((st) => (
          <div className="evnsv-card" key={st.id}>
            <div className="evnsv-thumb">
              <img src={st.image} alt={st.name} />
            </div>

            <div className="evnsv-info">
              <div className="evnsv-titlerow">
                <h3 className="evnsv-title">{st.name}</h3>
                <span className="evnsv-distance">{st.distance}</span>
              </div>

              <p className="evnsv_addr">{st.address1}</p>
              <p className="evnsv_addr muted">{st.address2}</p>

              <div className="evnsv_features">
                <span className="evnsv_feat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                    <circle cx="12" cy="20" r="1"></circle>
                  </svg>
                </span>
                <span className="evnsv_feat">
                  <img src="/chargerStation.svg" alt="charger" />
                </span>
              </div>

              <div className="evnsv_bottomrow">
                <div className="evnsv_rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={i < st.rating ? "#FFC107" : "none"}
                      stroke="#FFC107"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15 8.5 22 9 17 13.5 18.5 20 12 16.5 5.5 20 7 13.5 2 9 9 8.5 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <button className="evnsv_slots">Slots Available</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="evnsv-loadmore">LOAD MORE »»</div>
    </div>
  );
}

export default EVNetworkSetView;
