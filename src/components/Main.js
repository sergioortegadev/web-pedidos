import React, { useState, useEffect } from "react";
// import { useModalConfirm } from "./hooks/useModal";
import Modal from "./Modal";
import ModalConfirm from "./ModalConfirm";
import { useModal } from "./hooks/useModal";
import "./Modal.css";
import Cart from "./Cart";
import { Routes, Route, Navigate, HashRouter, Link } from "react-router-dom";
import Home from "../pages/Home";
import { Pizzas } from "../pages/Pizzas";

const Main = () => {
  /*  - -  Cerrar Modales con tecla ESC - Falta revision - - -  */
  /*   const handleEsc = (event) => {
    if (event.code === `Escape`) {
      closeModal00();
      closeModal01();
      closeModal02();
      closeModal03();
      closeModal04();
      closeModal05();
    }
  }; */

  /*  - - - - Carta en archivo db.js - - - - */

  const [isOpenCart, openCart, closeCart] = useModal(false);

  return (
    <div /* onKeyDown={handleEsc} */>
      <div
        onClick={openCart}
        className={`div-cart ${isActiveCart && `is-open`}`}
      >
        <img src="./assets/cart.png" alt="cart" />
        <h3 className="cart-items">{cart}</h3>
      </div>
      <HashRouter>
        <Link to="/">Home</Link>
        <Link to="/pizzas">Pizzas</Link>
        <Link to="/lomos">Lomitos</Link>
        <Link to="/empanadas">Empanadas</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pizzas" element={<Pizzas />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Main;
