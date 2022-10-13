import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <div className="foto-pizza">
          <img
            className="foto-pizza-img"
            src="./assets/pizza.jpg"
            alt="pizza"
          />
        </div>
        <div className="logo">
          <img src="./assets/logo.png" alt="" className="logo-img" />
        </div>
        <div className="titulo-centro">
          <h1>Pizzería Dev's</h1>
          {/* <h4>Hacé tu pedido aquí</h4> */}
        </div>
      </Link>
    </>
  );
};

export default Header;
