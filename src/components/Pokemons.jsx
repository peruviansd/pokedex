import { useEffect, useState } from "react";
import { getData } from "../api/helper";
import PokemonCard from "./PokemonCard.jsx";
import img from "../assets/images.png";
import Loader from "./Loader";
import Search from "./Search";

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState(null);
  const [listToPrint, setListToPrint] = useState(null);
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

    const setData = async (url) => {
      try {
        setLoading(true);
        const data = await getData(url);
        setAllPokemons(data.results);
        setListToPrint(data.results);
        setLoading(false);
      } catch (error) {
        setMessage("something went wrong with the api");
      }
    };

    setData(url);
  }, []);

  return (
    <>
      <header className="p-4 flex flex-col gap-y-4 sticky top-0 bg-white">
        <figure className="py-2">
          <img src={img} alt="logo" className="w-40 mx-auto" />
        </figure>
        <Search allPokemons={allPokemons} setListToPrint={setListToPrint} />
      </header>
      {loading && <Loader />}
      <main className="p-4 grid grid-cols-2 auto-rows-fr gap-4 ">
        {listToPrint &&
          listToPrint.map((el) => (
            <PokemonCard url={el.url} key={el.url.slice(34, -1)} />
          ))}
      </main>

      {message && (
        <div className="border border-red-600  text-red-600 font-semibold p-4 rounded-md">
          <h3>something went wrong with the api</h3>
        </div>
      )}
    </>
  );
};

export default Pokemons;
