import React, { useState, useEffect } from "react";
import ModalCart from "./ModalCart";
import ModalConfirm from "./ModalConfirm";
import { useModal } from "./hooks/useModal";
import "./Modal.css";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Pizzas } from "../pages/Pizzas";
import { Lomos } from "../pages/Lomos";
import { Empanadas } from "../pages/Empanadas";
import DatosYEnvio from "../pages/DatosYEnvio";

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

  /* Carrito y bnt Confirmar - Apertura y cierre modales */

  const [isOpenCart, openCart, closeCart] = useModal(false);
  const [isOpenConfirm, openConfirm, closeConfirm] = useModal(false);

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
      closeConfirm();
      setIsActiveCart(false);
    } else {
      setCart(JSON.parse(sessionStorage.getItem(`order`)).length);
      openConfirm();
      setIsActiveCart(true);
    }
  }, [orderFrom]);

  return (
    <div /* onKeyDown={handleEsc} */>
      {/*  - Carrito y btn Confirm -  */}
      <div
        onClick={openCart}
        className={`div-cart ${isActiveCart && `is-open`}`}
      >
        <img src="./assets/cart.png" alt="cart" />
        <h3 className="cart-items">{cart}</h3>
      </div>
      <ModalConfirm isOpen={isOpenConfirm} closeModal={closeCart} />
      <ModalCart
        isOpen={isOpenCart}
        closeModal={closeCart}
        closeCart={closeCart}
      >
        <h2>Mi Pedido</h2>
        {sessionStorage.getItem(`order`) && (
          <Cart isOpen={isOpenConfirm} closeCart={closeCart} />
        )}
      </ModalCart>

      {/* HashRouter en App.js para que englobe todo el sitio: Header, Main, etc*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizzas" element={<Pizzas orderUp={handleOrder} />} />
        <Route path="lomos" element={<Lomos orderUp={handleOrder} />} />
        <Route path="empanadas" element={<Empanadas orderUp={handleOrder} />} />
        <Route path="datos" element={<DatosYEnvio />} />
      </Routes>
    </div>
  );
};

export default Main;
