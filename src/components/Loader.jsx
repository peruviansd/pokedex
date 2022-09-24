import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-36">
      <div className="lds-spinner ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
