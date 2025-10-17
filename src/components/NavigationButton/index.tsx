/* eslint-disable react-hooks/rules-of-hooks */
import "./css/styles.css";
import { Link, useLocation } from "react-router-dom";

interface NavigationButtonProps {
  children?: React.ReactNode;
  title:string;
  to: string;
}

export function index({ children,title, to }: NavigationButtonProps) {
  const location = useLocation();
  const isActive = to === "" && "navigation-button-inactive";
  const urlAtual = location.pathname === to && "navigation-button-active";

  return (
    <div className="navigationDiv">
      <Link className={`navigation-button ${urlAtual} ${isActive}`} to={to}>
        {children}
      </Link>
      <p>{title}</p>
    </div>
  );
}
