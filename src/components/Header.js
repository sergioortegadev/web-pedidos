import React from "react";

const Header = () => {
  return (
    <>
      <div className="foto-pizza">
        <img className="foto-pizza-img" src="/assets/pizza.jpg" alt="pizza" />
      </div>
      <div className="logo">
        <img src="/assets/logo.png" alt="" className="logo-img" />
      </div>
      <div className="titulo-centro">
        <h1>Pizzería Ejemplo</h1>
        {/* <h4>Hacé tu pedido aquí</h4> */}
      </div>
    </>
  );
};

export default Header;
