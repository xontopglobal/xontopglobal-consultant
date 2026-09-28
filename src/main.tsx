import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import ServicesPage from "./components/pages/ServicesPage";
import ServicePage from "./components/pages/ServicePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<App />} />

        {/* All services */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Individual service */}
        <Route path="/services/:serviceId" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);