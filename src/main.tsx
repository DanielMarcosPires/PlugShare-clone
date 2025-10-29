import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/page.tsx";
import { WebProvider } from "./context/webContext.tsx";
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
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
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
