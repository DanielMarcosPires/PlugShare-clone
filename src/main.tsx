import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/page.tsx";
import { WebProvider } from "./context/webContext.tsx";
import Boot from "./pages/Boot/page.tsx";
import Singin from "./pages/Sing_in/Sing_in.tsx";
import SingUp from "./pages/Sing_up/Sing_up.tsx";
import Profile from "./pages/Dashboard/page/Profile/page.tsx";
import BuscaDeCarro from "./pages/BuscaDeCarro/page.tsx";

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
    element: <Boot />,
  },
  {
    path: "/sign-in",
    element: <Singin />,
  },
  {
    path: "/sign-up",
    element: <SingUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [{ path: "profile", element: <Profile /> }],
  },
  { path: "/car", element: <BuscaDeCarro /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebProvider>
      <RouterProvider router={router} />
    </WebProvider>
  </StrictMode>
);
