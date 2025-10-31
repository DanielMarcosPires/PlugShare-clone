import "./css/styles.css";

import { index as NavigationButton } from "../../components/NavigationButton";
import { index as Carrosel } from "../../components/Carrosel";
import { index as Hero } from "./components/Hero";
import { Link, Outlet } from "react-router-dom";
import { useContext, type CSSProperties } from "react";
import { WebContext } from "../../context/webContext";
import { FaCar, FaChargingStation } from "react-icons/fa";
import { CircleUser } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";
import { GoGitCompare } from "react-icons/go";

export function Dashboard() {
  const { webStructure } = useContext(WebContext);

  const style = {
    fundo: {
      background: webStructure.background,
    } as CSSProperties,
    icons: webStructure.text,
    invertedIcons:webStructure.textInverted,
    profile: {
      background: webStructure.invertedBackground,
      color: webStructure.textInverted,
    } as CSSProperties,
    text: {
      color: webStructure.text,
    } as CSSProperties,
    textDestaque:{
      color:webStructure.textDestaque
    } as CSSProperties
  };

  return (
    <div className="ajuste" style={style.fundo}>
      <Outlet />
      <header className="header">
        <div className="flex">
          <div className="header_info">
            <span className="headerSpan">New Launch</span>
            <h3 className="headerTitle">KIA EV6</h3>
            <img src="/carro.png" alt="Carro" />
          </div>
          <Link style={style.fundo} className="iconProfile" to="profile">
            <CircleUser color={style.icons} size={50} />
          </Link>
        </div>
      </header>
      <div className="margin">
        <nav className="navigation">
          <h2 style={style.text}>Explore</h2>
          <ul>
            <NavigationButton title="Cars" to="/">
              <FaCar color={webStructure.textInverted} size={30} />
            </NavigationButton>
            <NavigationButton title="Stations" to="/changer-station">
              <FaChargingStation color={webStructure.textInverted} size={30} />
            </NavigationButton>
            <NavigationButton title="Accessories" to="/accessories">
              <FaCartShopping color={webStructure.textInverted} size={30} />
            </NavigationButton>
            <NavigationButton title="Compare" to="/justice">
              <GoGitCompare color={webStructure.textInverted} size={30} />
            </NavigationButton>
          </ul>
        </nav>
        <main>
          <section>
            <Hero urlImage="./map.png">
              <h3 style={style.textDestaque}>There are 10 Charging Stations nearby</h3>
              <p style={style.text}>Nearest one is just 1 km away</p>
            </Hero>
          </section>
          <section>
            <h3 style={style.text}>Explore EV CLUB</h3>
            <Carrosel />
          </section>
        </main>
      </div>
    </div>
  );
}
