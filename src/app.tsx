import { useContext, type CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import { WebContext } from "./context/webContext";
//Daniel é o responsavel para configurar as rotas

export default function Router() {
  const {webStructure} = useContext(WebContext)
  
  const controlStyle = {
    backgroundColor:webStructure.background,
  } as CSSProperties;

  return (
    <div style={controlStyle}>
      <Outlet />
    </div>
  );
}
