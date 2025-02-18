import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import router from "./route/index.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
