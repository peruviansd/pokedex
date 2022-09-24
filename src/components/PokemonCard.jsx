import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api/helper";
import { DataContext } from "../context/Context";
import colors from "../helpers/colors";

const PokemonCard = ({ url }) => {
  const [pokeInfo, setPokeInfo] = useState({});
  const { setActivePokemon } = useContext(DataContext);
  let navigate = useNavigate();

  useEffect(() => {
    getData(url).then((info) => {
      getData(info.species.url).then((data) => {
        info.color = data.color.name;
        info.egg_group = data.egg_groups;
        info.genera = data.genera.find((el) => el.language.name === "en");
        setPokeInfo(info);
      });
    });
  }, []);

  const handleClick = () => {
    setActivePokemon(pokeInfo);
    navigate(`${pokeInfo.name}`);
  };

  if (Object.keys(pokeInfo).length > 0) {
    let { name, types, sprites, color } = pokeInfo;
    types = types.map((t) => t.type.name);

    return (
      <div
        onClick={handleClick}
        style={{
          backgroundImage: colors[color],
        }}
        className={` p-2 max-w-xs rounded-md flex hover:opacity-80 shadow shadow-gray-600`}
      >
        <div>
          <h3 className="text-white font-bold">{name}</h3>
          <div className="flex flex-col items-start gap-y-2 text-xs text-white font-semibold">
            {types &&
              types.map((t, i) => (
                <p
                  className=" rounded-xl  px-2"
                  style={{ background: `rgba(255, 255, 255, 0.2)` }}
                  key={i}
                >
                  {t}
                </p>
              ))}
          </div>
        </div>
        <figure className=" flex items-end   ">
          <img
            src={sprites.other["official-artwork"].front_default}
            alt={name}
            className="min-w-[70px] "
          />
        </figure>
      </div>
    );
  }
};

export default PokemonCard;

{
  /* <div
        onClick={handleClick}
        style={{ backgroundColor: colors[color] }}
        className={` relative p-4 max-w-xs rounded-md flex hover:opacity-80`}
      >
        <section className=" text-white font-bold text-xs">
          <h3 className="text-lg">{name}</h3>
          {types &&
            types.map((t) => (
              <p
                className=" rounded-xl px-2 w-fit"
                style={{ background: `rgba(255, 255, 255, 0.2)` }}
              >
                {t}
              </p>
            ))}
        </section>
        <figure className=" flex items-end   ">
          <img
            src={sprites.other["official-artwork"].front_default}
            alt={name}
            className="min-w-[70px]"
          />
        </figure>
      </div> */
}
