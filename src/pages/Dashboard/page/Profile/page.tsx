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
import { WebContext } from "../../../../context/webContext";
import { useContext, type CSSProperties } from "react";
import { MdSupportAgent } from "react-icons/md";
export default function Profile() {
  
  const {webStructure} = useContext(WebContext)
  
  

  const style ={
    fundo:{
      background:webStructure.background
    } as CSSProperties,
    icons:webStructure.textInverted,
    profile:{
      background:webStructure.invertedBackground,
      color:webStructure.textInverted
    } as CSSProperties,
    text:{
      color:webStructure.text
    } as CSSProperties,
    textDestaque:{
      color:webStructure.textDestaque
    } as CSSProperties
  }

  const name = localStorage.getItem("name");
  return (
    <div className="profile-page" style={style.fundo}>
      <header className="profile-header">
        <div className="profile-div">
          <nav className="profile-nav">
            <Link className="exit" to="/dashboard">
              <ArrowLeft color={style.icons} size={35} />
            </Link>
            <Switch />
          </nav>
          <img style={style.profile} className="profile-image" src="" alt="sem imagem!" />
        </div>
      </header>
      <main className="profile-main">
        <section className="profile-section">
          <h2 style={style.text} className="profile-title">
            Hey! <span>{name}</span> Good Morning.
          </h2>
          <nav className="profile-navigation">
            <Button href="orders" title="Orders">
              <Handbag color={style.icons} size={30} />
            </Button>
            <Button href="my_cars" title="My Cars">
              <CarFront color={style.icons} size={30} />
            </Button>
            <Button href="wallet" title="Wallet">
              <Wallet color={style.icons} size={30} />
            </Button>
            <Button href="support" title="Support">
              <MdSupportAgent color={style.icons} size={30}/>
            </Button>
          </nav>
        </section>
        <section className="profile-section">
          <nav>
            <h2 style={style.text}>Your Information</h2>
            <li>
              <Link style={style.text} className="profile-section_link" to={""}>
                <SquareUserRound /> Profile
              </Link>
            </li>
            <li>
              <Link style={style.text} className="profile-section_link" to={""}>
                <MapPin /> Address Book
              </Link>
            </li>
          </nav>
          <nav>
            <h2 style={style.text}>Other Information</h2>
            <li>
              <Link style={style.text} className="profile-section_link" to={""}>
                <Languages /> Language Selection
              </Link>
            </li>
            <li>
              <Link style={style.text} className="profile-section_link" to={""}>
                <Bell /> Notification Preferences
              </Link>
            </li>
            <li>
              <Link style={style.text} className="profile-section_link" to={""}>
                <Info /> About Us
              </Link>
            </li>
            <li>
              <Link style={style.text} className="profile-section_link" to={""}>
                <Share /> Referral
              </Link>
            </li>
            <li>
              <Link style={style.text} className="profile-section_link" to={""}>
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
