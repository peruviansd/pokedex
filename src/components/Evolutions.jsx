import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { getData } from "../api/helper";
import { DataContext } from "../context/Context";

function fillEvolutions(t, evolutions) {
  if (t.length === 0) return;
  t.forEach((child) => {
    evolutions.push({
      ...child.species,
    });

    fillEvolutions(child.evolves_to, evolutions);
  });
}

const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

const Evolutions = () => {
  const [evolutions, setEvolutions] = useState([]);

  const {
    activePokemon: {
      species: { url },
    },
  } = useContext(DataContext);

  useEffect(() => {
    getData(url).then((data) => {
      getData(data.evolution_chain.url).then((data) => {
        const all = data.chain;
        const evolutions = [all.species];
        fillEvolutions(all.evolves_to, evolutions);
        setEvolutions(evolutions);
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-2 text-center gap-y-4">
      {evolutions.map((el) => (
        <figure className="w-auto">
          <img
            className="mx-auto"
            src={`${urlImg + el.url.slice(42, -1)}.png`}
            alt={el.name}
            width="80"
          />
          <figcaption>{el.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Evolutions;
