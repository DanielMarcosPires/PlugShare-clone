import {
  ArrowLeft,
  Bell,
  CarFront,
  Handbag,
  Info,
  Languages,
  MapPin,
  Power,
  Share,
  SquareUserRound,
  Wallet,
} from "lucide-react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import Button from "./components/Button/Button";
import Switch from "../../../../components/Switch/Switch";
export default function Profile() {
  const name = "{username}";
  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-div">
          <nav className="profile-nav">
            <Link className="exit" to="/dashboard">
              <ArrowLeft size={35} />
            </Link>
            <Switch />
          </nav>
          <img className="profile-image" src="" alt="sem imagem!" />
        </div>
      </header>
      <main className="profile-main">
        <section className="profile-section">
          <h2 className="profile-title">
            Hey! <span>{name}</span> Good Morning.
          </h2>
          <nav className="profile-navigation">
            <Button href="orders" title="Orders">
              <Handbag size={30} />
            </Button>
            <Button href="my_cars" title="My Cars">
              <CarFront size={30} />
            </Button>
            <Button href="wallet" title="Wallet">
              <Wallet size={30} />
            </Button>
            <Button href="support" title="Support">
              <img src="/service.svg" alt="" />
            </Button>
          </nav>
        </section>
        <section className="profile-section">
          <nav>
            <h2>Your Information</h2>
            <li>
              <Link className="profile-section_link" to={""}>
                <SquareUserRound /> Profile
              </Link>
            </li>
            <li>
              <Link className="profile-section_link" to={""}>
                <MapPin /> Address Book
              </Link>
            </li>
          </nav>
          <nav>
            <h2>Other Information</h2>
            <li>
              <Link className="profile-section_link" to={""}>
                <Languages /> Language Selection
              </Link>
            </li>
            <li>
              <Link className="profile-section_link" to={""}>
                <Bell /> Notification Preferences
              </Link>
            </li>
            <li>
              <Link className="profile-section_link" to={""}>
                <Info /> About Us
              </Link>
            </li>
            <li>
              <Link className="profile-section_link" to={""}>
                <Share /> Referral
              </Link>
            </li>
            <li>
              <Link className="profile-section_link" to={""}>
                <Power /> Log out
              </Link>
            </li>
          </nav>
        </section>
      <footer className="profile-footer">
        
      </footer>
      </main>
    </div>
  );
}
