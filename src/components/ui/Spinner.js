import React from "react";
import Spinner from "../../img/spinner.gif";

const Spiner = () => {
  return (
    <img
      src={Spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='Loading'
    />
  );
};

export default Spiner;
