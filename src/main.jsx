import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import { AOSInit } from "./static/Aos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AOSInit>
        <App />
      </AOSInit>
    </BrowserRouter>
  </StrictMode>
);
