import React, { useContext } from "react";
import { DataContext } from "../context/Context";
const Stats = () => {
  const {
    activePokemon: { stats },
  } = useContext(DataContext);

  return (
    <table className="w-4/5 m-auto border-separate border-spacing-2">
      {stats.map((el, i) => (
        <tr>
          <td className="text-gray-700">
            {el.stat.name.includes("special")
              ? `sp. ${el.stat.name.slice(8)} `
              : el.stat.name}
          </td>
          <td>{el.base_stat}</td>
          <td className=" w-1/2">
            <div
              className=" h-1 bg-red-500 rounded transition ease-in-out "
              style={{
                width: el.base_stat + "%",
                background: i % 2 == 0 ? "green" : "red",
              }}
            ></div>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Stats;
