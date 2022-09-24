import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=" h-1/5 mt-5">
      <ul className="flex h-full justify-evenly  items-center text-gray-700">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="stats"
          >
            Base Stats
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="evolution"
          >
            Evolution
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="moves"
          >
            Moves
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
