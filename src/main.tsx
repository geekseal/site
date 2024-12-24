import CS01 from "@/pages/Content/index.tsx";
import Home from "@/pages/Home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/fe" element={<CS01 />} />
          <Route path="/be" element={<Home />} />
          <Route path="/algo" element={<Home />} />
          <Route path="/cs" element={<CS01 />} />
          <Route path="/about" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
