import "./css/styles.css";
import { index as NavigationButton } from "../../components/NavigationButton";
import {icon as Justice} from "../../svgs/Justice/icon"
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
      <nav>
        <h2>Explore</h2>
        <div>
          <NavigationButton to="">
            <Justice />
          </NavigationButton>
        </div>
      </nav>
    </>
  );
}
