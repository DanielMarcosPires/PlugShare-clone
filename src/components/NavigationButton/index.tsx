/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, type CSSProperties } from "react";
import "./css/styles.css";
import { Link, useLocation } from "react-router-dom";
import { WebContext } from "../../context/webContext";

interface NavigationButtonProps {
  children?: React.ReactNode;
  title:string;
  to: string;
}

export function index({ children,title, to }: NavigationButtonProps) {
  const location = useLocation();
  const {webStructure} = useContext(WebContext)
  
  const isActive = to === "" && "navigation-button-inactive";
  const urlAtual = location.pathname === to && "navigation-button-active";

  const style = {
    text:{color:webStructure.text} as CSSProperties
  }

  return (
    <div className="navigationDiv">
      <Link className={`navigation-button ${urlAtual} ${isActive}`} to={to}>
        {children}
      </Link>
      <p style={style.text}>{title}</p>
    </div>
  );
}
