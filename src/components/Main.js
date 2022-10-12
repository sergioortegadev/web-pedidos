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
  const [isOpenConfirm, openConfirm] = useModal(false);

  /*   -  Contador de pedidos del carrito y visualizacion activa   -  */
  const [cart, setCart] = useState(0);
  const [isActiveCart, setIsActiveCart] = useState(false);

  // Incorpora el pedido de cada item que viene en "data" (formato objetos dentro de un arreglo). Viene de los componentes hijos y se incorpora a la variable de estado orderForm, que luego se añadirá al sessionStorage en el useEffect
  const [orderFrom, setOrderFrom] = useState([]);
  const handleOrder = (data) => setOrderFrom(data);

  useEffect(() => {
    if (
      sessionStorage.getItem(`order`) === "[]" ||
      sessionStorage.getItem(`order`) === null
    ) {
      setCart(0);
      setIsActiveCart(false);
    } else {
      setCart(JSON.parse(sessionStorage.getItem(`order`)).length);
      openConfirm();
      setIsActiveCart(true);
    }
  }, [orderFrom]);

  return (
    <div /* onKeyDown={handleEsc} */>
      <div
        onClick={openCart}
        className={`div-cart ${isActiveCart && `is-open`}`}
      >
        <img src="./assets/cart.png" alt="cart" />
        <h3 className="cart-items">{cart}</h3>
      </div>
      <ModalConfirm isOpen={isOpenConfirm} />
      <Modal isOpen={isOpenCart} closeModal={closeCart}>
        <h2>Mi Pedido</h2>
        {sessionStorage.getItem(`order`) && <Cart isOpen={isOpenConfirm} />}
      </Modal>

      <HashRouter>
        <Link to="/">Home</Link>
        <Link to="/pizzas">Pizzas</Link>
        <Link to="/lomos">Lomitos</Link>
        <Link to="/empanadas">Empanadas</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pizzas" element={<Pizzas orderPizza={handleOrder} />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Main;
