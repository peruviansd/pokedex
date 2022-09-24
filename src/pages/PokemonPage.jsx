import React, { useContext } from "react";
import Navigation from "../components/Navigation";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { DataContext } from "../context/Context";
import colors from "../helpers/colors";
import { BiArrowBack } from "react-icons/bi";

const PokemonPage = () => {
  const { activePokemon } = useContext(DataContext);
  let navigate = useNavigate();

  if (!activePokemon) {
    return <Navigate to="/pokedex/" replace />;
  }

  let {
    order,
    types,
    color,
    name,
    genera: { genus },
    sprites: { other },
  } = activePokemon;

  if (order < 10) order = "#00" + order;
  if (order < 100) order = "#0" + order;

  return (
    <main
      className="h-screen md:max-w-xl mx-auto"
      style={{ background: colors[color] }}
    >
      <header className=" p-4 relative h-1/2 text-white font-semibold">
        <BiArrowBack
          className=" text-2xl shadow-sm  text-black  "
          onClick={() => {
            navigate("/pokedex/");
          }}
        />
        <section className="flex justify-between ">
          <h1 className="text-4xl first-letter:">{name}</h1>
          <p className="self-center"> {order}</p>
        </section>
        <section className="mt-4 flex justify-between">
          <div className=" flex gap-x-1">
            {types.map((t, i) => (
              <p
                className="px-4  rounded-3xl  "
                style={{ background: `rgba(255, 255, 255, 0.2)` }}
                key={i}
              >
                {t.type.name}
              </p>
            ))}
          </div>
          <p className="text-right text-xl ">{genus.split(" ")[0]}</p>
        </section>
        <figure>
          <img
            src={other["official-artwork"].front_default}
            alt={name}
            className="absolute -bottom-10 left-0 right-0 mx-auto"
            width={300}
          />
        </figure>
      </header>

      <div className="h-1/2 overflow-scroll bg-slate-50 rounded-t-2xl">
        <Navigation />
        <Outlet />
      </div>
    </main>
  );
};

export default PokemonPage;
