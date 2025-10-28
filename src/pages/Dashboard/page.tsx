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

  const controlStyle = {
    background: webStructure.background,
    color: webStructure.text,
  } as CSSProperties;

  return (
    <div style={controlStyle}>
      <Outlet />
      <header className="header">
        <div className="flex">
          <div className="header_info">
            <span className="headerSpan">New Launch</span>
            <h3 className="headerTitle">KIA EV6</h3>
            <img src="/carro.png" alt="Carro" />
          </div>
          <Link className="iconProfile" to="profile">
            <CircleUser size={50} />
          </Link>
        </div>
      </header>
      <nav className="navigation">
        <h2>Explore</h2>
        <ul>
          <NavigationButton title="Cars" to="/">
            <FaCar color={webStructure.text} size={30} />
          </NavigationButton>
          <NavigationButton title="Charging Stations" to="/changer-station">
            <FaChargingStation color={webStructure.text} size={30} />
          </NavigationButton>
          <NavigationButton title="Accessories" to="/accessories">
            <FaCartShopping color={webStructure.text} size={30} />
          </NavigationButton>
          <NavigationButton title="Compare Cars" to="/justice">
            <GoGitCompare color={webStructure.text} size={30} />
          </NavigationButton>
        </ul>
      </nav>
      <main>
        <section>
          <Hero urlImage="./map.png">
            <h3 >There are 10 Charging Stations nearby</h3>
            <p>Nearest one is just 1 km away</p>
          </Hero>
        </section>
        <section>
          <h3>Explore EV CLUB</h3>
          <Carrosel/>
        </section>
      </main>
    </div>
  );
}
