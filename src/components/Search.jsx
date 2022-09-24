import { useState } from "react";

import { FcSearch } from "react-icons/fc";

const Search = ({ allPokemons, setListToPrint }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = allPokemons.filter((pokemon) =>
      pokemon.name.startsWith(input.toLowerCase())
    );
    setListToPrint(newList);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="searchPokemon"
        type="text"
        className="shadow appearance-none border rounded py-2 px-3 text-gray-600 leading-tight"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Search a Pokemon"
      />
      <button className="bg-gray-400 h-full text-white font-bold py-2 px-4 ml-2 rounded leading-tight">
        <FcSearch />
      </button>
    </form>
  );
};

export default Search;
