import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Stats from "./components/Stats";
import Evolutions from "./components/Evolutions";
import Moves from "./components/Moves";
import { DataProvider } from "./context/Context";
import "./index.css";
import PokemonPage from "./pages/PokemonPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:pokemon" element={<PokemonPage />}>
            <Route index element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="stats" element={<Stats />} />
            <Route path="evolution" element={<Evolutions />} />
            <Route path="moves" element={<Moves />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
