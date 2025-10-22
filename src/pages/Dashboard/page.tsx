import "./css/styles.css";

import { index as NavigationButton } from "../../components/NavigationButton";
import { index as Carrosel } from "../../components/Carrosel";

import { index as Hero } from "./components/Hero";

import "./css/styles.css";
import { motion } from "framer-motion";
//Daniel é o responsavel por fazer o dashboard
export function Dashboard() {
  return (
    <>
      <header className="header">
        <div>
          <span className="headerSpan">New Launch</span>
          <h3 className="headerTitle">KIA EV6</h3>
          <img src="/carro.png" alt="Carro" />
        </div>
      </header>
      <nav className="navigation">
        <h2>Explore</h2>
        <ul>
          <NavigationButton title="Cars" to="/">
            <img src="/car.svg" alt="iconCar" />
          </NavigationButton>
          <NavigationButton title="Charging Stations" to="/changer-station">
            <img src="/chargerStation.svg" alt="iconChargerStation" />
          </NavigationButton>
          <NavigationButton title="Accessories" to="/accessories">
            <img src="/accessories.svg" alt="iconAccessories" />
          </NavigationButton>
          <NavigationButton title="Compare Cars" to="/justice">
            <img src="/justice.svg" alt="iconJustice" />
          </NavigationButton>
        </ul>
      </nav>
      <main>
        <section>
          <Hero urlImage="./map.png">
            <h3>There are 10 Charging Stations nearby</h3>
            <p>Nearest one is just 1 km away</p>
          </Hero>
        </section>
        <section>
          <Carrosel>
            <motion.div className="gridSlide">
              <img src="/imagensCarrosel/imagem4.png" alt="" />
              <img src="/imagensCarrosel/imagem2.png" alt="" />
            </motion.div>
            <motion.div className="gridSlide">
              <img src="/imagensCarrosel/imagem3.png" alt="" />
            </motion.div>
          </Carrosel>
        </section>
      </main>
    </>
  );
}
