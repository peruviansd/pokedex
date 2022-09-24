import React, { useContext } from "react";
import { DataContext } from "../context/Context";

const About = () => {
  const { activePokemon } = useContext(DataContext);

  return (
    <table className="w-4/5 m-auto border-separate border-spacing-2">
      <tr>
        <td className="text-gray-700">Specie:</td>
        <td className="last-of-type:bg-red-20">{activePokemon.genera.genus}</td>
      </tr>
      <tr>
        <td className="text-gray-700">Height:</td>
        <td>{activePokemon.height}</td>
      </tr>
      <td className="text-gray-700">Weight:</td>
      <td>{activePokemon.weight}</td>
      <tr>
        <td className="text-gray-700">Abilities:</td>
        <td>{activePokemon.abilities.map((el) => el.ability.name + " ")}</td>
      </tr>
      <tr>
        <td className="text-gray-700">Types:</td>
        <td>{activePokemon.types.map((el) => el.type.name + " ")}</td>
      </tr>
    </table>
  );
};

export default About;
