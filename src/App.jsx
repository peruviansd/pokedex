import { Route, Routes } from "react-router-dom";
import Pokemons from "./components/Pokemons";

import About from "./components/About";
import Stats from "./components/Stats";
import Evolutions from "./components/Evolutions";
import Moves from "./components/Moves";
import "./index.css";
import PokemonPage from "./pages/PokemonPage";
function App() {
  return (
    <div className=" md:max-w-xl md:mx-auto ">
      <Routes>
        <Route path="/pokedex/" element={<Pokemons />} />

        <Route path="/pokedex/:pokemon" element={<PokemonPage />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="stats" element={<Stats />} />
          <Route path="evolution" element={<Evolutions />} />
          <Route path="moves" element={<Moves />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
