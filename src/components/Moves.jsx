import React, { useContext } from "react";
import { DataContext } from "../context/Context";

const Moves = () => {
  const {
    activePokemon: { moves },
  } = useContext(DataContext);

  return (
    <div className="h-4/5 m-auto grid grid-cols-3 auto-rows-min gap-4 px-4 ">
      {moves.map((el) => (
        <div className="rounded text-center self-center even:bg-red-400 odd:bg-green-400">
          {el.move.name}
        </div>
      ))}
    </div>
  );
};

export default Moves;
