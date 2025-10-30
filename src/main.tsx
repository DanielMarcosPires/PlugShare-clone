import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuscaDeCarro from "./pages/BuscaDeCarro/page.tsx";
import { Dashboard } from "./pages/Dashboard/page.tsx";
import { WebProvider } from "./context/Slide.tsx";
import ListNetwork from "./pages/listnetwork/ListNetwork.tsx";

/**
 * Rotas disponíveis na aplicação:
 *
 * Inicial: http://localhost:5173/
 * Dashboard: http://localhost:5173/dashboard
 * Brand: http://localhost:5173/brand
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children:[
      {path:"car", element:<BuscaDeCarro />},
      {path:"charging-station", element:<ListNetwork />},
      {path:"accessories", element:<></>},
      {path:"compare-cars", element:<></>},
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebProvider>
      <RouterProvider router={router} />
    </WebProvider>
  </StrictMode>
);