import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuscaDeCarro from "./pages/BuscaDeCarro/page.tsx";
import { Dashboard } from "./pages/Dashboard/page.tsx";
import { WebProvider } from "./context/Slide.tsx";
import App from "./router.tsx";
import Profile from "./pages/Dashboard/page/Profile/page.tsx";

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