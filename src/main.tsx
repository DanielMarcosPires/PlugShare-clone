import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrandSearch from "./pages/BrandSearch/page.tsx";
import BuscaDeCarro from "./pages/BuscaDeCarro/page.tsx";
import { Dashboard } from "./pages/Dashboard/page.tsx";
import { WebProvider } from "./context/Slide.tsx";
import App from "./app.tsx";
import Profile from "./pages/Dashboard/page/Profile/page.tsx";
import { AddEvVehicle } from "./pages/AddEvVehicle/page.tsx";
import { CvNetwork } from "./pages/Cv Network/page.tsx";
import { EVNetworkSetView } from "./pages/EVNetworkSetView/page.tsx";

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
    element: <App />,
    children: [
      { path: "/", element: <BuscaDeCarro /> },
      { path: "brand", element: <BrandSearch /> },
      { path: "add-ev-vehicle", element: <AddEvVehicle /> },
      { path: "cv-network", element: <CvNetwork /> },
      { path: "ev-network-set-view", element: <EVNetworkSetView /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "profile",
            element:<Profile />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebProvider>
      <RouterProvider router={router} />
    </WebProvider>
  </StrictMode>
);
