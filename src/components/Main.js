import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "./hooks/useModal";
// import { useModalConfirm } from "./hooks/useModal";
import Modal from "./Modal";
import ModalConfirm from "./ModalConfirm";
import "./Modal.css";

const Main = () => {
  /* Apertura y Cierre Ventanas Modales */
  const [isOpenModal00, openModal00, closeModal00] = useModal(false);
  const [isOpenModal01, openModal01, closeModal01] = useModal(false);
  const [isOpenModal02, openModal02, closeModal02] = useModal(false);
  const [isOpenModal03, openModal03, closeModal03] = useModal(false);
  const [isOpenModal04, openModal04, closeModal04] = useModal(false);
  const [isOpenModal05, openModal05, closeModal05] = useModal(false);
  const [isOpenCart, openCart, closeCart] = useModal(false);
  const [isOpenConfirm, openConfirm] = useModal(false);

  /* Botón agregar al carrito */
  let item = {};
  let idOrder = Date.now();
  let order = [item];

  const agregarCarrito00 = () => {
    if (sessionStorage.getItem(`order`) === null) {
      item.id = idOrder;
      item.quantity = cantidad00;
      item.id = carta[0].id;
      item.product = `${carta[0].prodName}`;
      item.subTotal = cantidad00 * carta[0].price;
      sessionStorage.setItem(`order`, JSON.stringify(order));
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));
      item.id = idOrder;
      item.quantity = cantidad00;
      item.id = carta[0].id;
      item.product = `${carta[0].prodName}`;
      item.subTotal = cantidad00 * carta[0].price;
      order.push(item);
      sessionStorage.setItem(`order`, JSON.stringify(order));
    }
  };

  const agregarCarrito01 = () => {
    if (sessionStorage.getItem(`order`) === null) {
      item.id = idOrder;
      item.quantity = cantidad01;
      item.id = carta[1].id;
      item.product = `${carta[1].prodName}`;
      item.subTotal = cantidad01 * carta[1].price;
      sessionStorage.setItem(`order`, JSON.stringify(order));
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));
      item.id = idOrder;
      item.quantity = cantidad01;
      item.id = carta[1].id;
      item.product = `${carta[1].prodName}`;
      item.subTotal = cantidad01 * carta[1].price;
      order.push(item);
      sessionStorage.setItem(`order`, JSON.stringify(order));
    }
  };
  // HACER METODOS COMO EL DE ARRIBA Y BORRAR ESTE
  const agregarCarrito = () => {
    console.log("agregar");
  };
  /* Contador de pedidos del carrito */
  const [cart, setCart] = useState(0);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const $cart = document.getElementsByClassName("div-cart");

  const cartOn = () => setIsActiveCart(true);

  useEffect(() => {
    if (sessionStorage.getItem(`order`) === null) {
      setCart(0);
    } else {
      setCart(JSON.parse(sessionStorage.getItem(`order`)).length);
      openConfirm();
      cartOn();
    }
  }, [order]);

  /*  - - - Modal Carrito - Listado del pedido - - -  */

  /* Contador de unidades para el botón "Agregar" dentro de las Modales */
  const [cantidad00, setCantidad00] = useState(1);
  const [cantidad01, setCantidad01] = useState(1);
  const [cantidad02, setCantidad02] = useState(1);
  const [cantidad03, setCantidad03] = useState(1);
  const [cantidad04, setCantidad04] = useState(1);
  const [cantidad05, setCantidad05] = useState(1);
  /* metodos para cambiar cantidad de productos */
  const sumarCantidad00 = () => setCantidad00(cantidad00 + 1);
  const restarCantidad00 = () => {
    if (cantidad00 > 1) setCantidad00(cantidad00 - 1);
  };
  const sumarCantidad01 = () => setCantidad01(cantidad01 + 1);
  const restarCantidad01 = () => {
    if (cantidad01 > 1) setCantidad01(cantidad01 - 1);
  };
  const sumarCantidad02 = () => setCantidad02(cantidad02 + 1);
  const restarCantidad02 = () => {
    if (cantidad02 > 1) setCantidad02(cantidad02 - 1);
  };
  const sumarCantidad03 = () => setCantidad03(cantidad03 + 1);
  const restarCantidad03 = () => {
    if (cantidad03 > 1) setCantidad03(cantidad03 - 1);
  };
  const sumarCantidad04 = () => setCantidad04(cantidad04 + 1);
  const restarCantidad04 = () => {
    if (cantidad04 > 1) setCantidad04(cantidad04 - 1);
  };
  const sumarCantidad05 = () => setCantidad05(cantidad05 + 1);
  const restarCantidad05 = () => {
    if (cantidad05 > 1) setCantidad05(cantidad05 - 1);
  };

  /*  - - - - Carta  - - - - */
  const pizzas = [
    [
      {
        id: 1,
        category: "Pizzas",
        prodName: "Pizza Capresse",
        description:
          "Mozzarella, verdeo, cebolla caramelizada en juliana, panceta confitada, olivas y orégano.",
        price: 900,
      },
    ],
    [
      {
        id: 2,
        category: "Pizzas",
        prodName: "Pizza Capresse",
        description:
          "Mozzarella, verdeo, cebolla caramelizada en juliana, panceta confitada, olivas y orégano.",
        price: 900,
      },
    ],
  ];

  const carta = [
    {
      id: 1000,
      category: "Pizzas",
      prodName: "Pizza Capresse",
      description:
        "Mozzarella, verdeo, cebolla caramelizada en juliana, panceta confitada, olivas y orégano.",
      price: 900,
      image: "./assets/pizza1.jpg",
    },
    {
      id: 1001,
      category: "Pizzas",
      prodName: "Tomate y Ajíes",
      description:
        "Mozzarella, tomates asados confitados, con ajíes, y suaves cebollas gratinadas.",
      price: 920,
      image: "./assets/pizza2.jpg",
    },
    {
      id: 1002,
      category: "Pizzas",
      prodName: "Huevo y longaniza",
      description:
        "Mozzarella, longaniza con cebolla confitada, huevos a la chapa y chalitas de masa de pizza.",
      price: 940,
      image: "./assets/pizza3.jpg",
    },
    {
      id: 1003,
      category: "Pizzas",
      prodName: "Finas hierbas",
      description:
        "Mozzarella bronceada, salteado de hongos de las sierras, y salsa criolla, en perejil fresco, más tomates cherry confitados.",
      price: 860,
      image: "./assets/pizza4.jpg",
    },
    {
      id: 1004,
      category: "Pizzas",
      prodName: "Albaca y cherry",
      description:
        "Mozzarella, concassé de tomates cherry frescos, albahaca fresca del huerto propio, y olivas.",
      price: 880,
      image: "./assets/pizza1.jpg",
    },
    {
      id: 1005,
      category: "Pizzas",
      prodName: "Mediterranea",
      description:
        "Mozzarella, ruedas de tomate, verdeo fresco recién cortado, cebolla caramelizada en juliana, panceta confitada, olivas y orégano.",
      price: 960,
      image: "./assets/pizza2.jpg",
    },
  ];

  return (
    <>
      <div
        onClick={openCart}
        className={`div-cart ${isActiveCart && `is-open`}`}
      >
        <img src="./assets/cart.png" alt="cart" />
        <h3 className="cart-items">{cart}</h3>
      </div>
      <section className="contenedor">
        <div className="cards">
          <figure onClick={openModal00} className="card">
            <img src={carta[0].image} alt={carta[0].prodName} />
            <figcaption>
              <h3>{carta[0].prodName}</h3>
              <h2>${carta[0].price}</h2>
            </figcaption>
          </figure>
          <figure onClick={openModal01} className="card">
            <img src={carta[1].image} alt={carta[1].prodName} />
            <figcaption>
              <h3>{carta[1].prodName}</h3>
              <h2>${carta[1].price}</h2>
            </figcaption>
          </figure>
          <figure onClick={openModal02} className="card">
            <img src={carta[2].image} alt={carta[2].prodName} />
            <figcaption>
              <h3>{carta[2].prodName}</h3>
              <h2>${carta[2].price}</h2>
            </figcaption>
          </figure>
          <figure onClick={openModal03} className="card">
            <img src={carta[3].image} alt={carta[3].prodName} />
            <figcaption>
              <h3>{carta[3].prodName}</h3>
              <h2>${carta[3].price}</h2>
            </figcaption>
          </figure>
          <figure onClick={openModal04} className="card">
            <img src={carta[4].image} alt={carta[4].prodName} />
            <figcaption>
              <h3>{carta[4].prodName}</h3>
              <h2>${carta[4].price}</h2>
            </figcaption>
          </figure>
          <figure onClick={openModal05} className="card">
            <img src={carta[5].image} alt={carta[5].prodName} />
            <figcaption>
              <h3>{carta[5].prodName}</h3>
              <h2>${carta[5].price}</h2>
            </figcaption>
          </figure>
        </div>
      </section>
      <ModalConfirm isOpen={isOpenConfirm} />
      <Modal isOpen={isOpenCart} closeModal={closeCart}>
        <h2>Carrito</h2>
      </Modal>
      <Modal isOpen={isOpenModal00} closeModal={closeModal00}>
        <div className="modal-head">
          <img src={carta[0].image} alt={carta[0].prodName} />
          <div className="modal-tit">
            <h3>{carta[0].prodName}</h3>
            <button className="modal-btn-mas-menos" onClick={sumarCantidad00}>
              +
            </button>
            <p className="modal-cantidad">{cantidad00}</p>
            <button className="modal-btn-mas-menos" onClick={restarCantidad00}>
              -
            </button>
            <button onClick={agregarCarrito00} className="btn-agregar-carrito">
              <h2>Agregar ${cantidad00 * carta[0].price}</h2>
            </button>
          </div>
        </div>
        <p>{carta[0].description}</p>
      </Modal>
      <Modal isOpen={isOpenModal01} closeModal={closeModal01}>
        <div className="modal-head">
          <img src={carta[1].image} alt={carta[1].prodName} />
          <div className="modal-tit">
            <h3>{carta[1].prodName}</h3>
            <button className="modal-btn-mas-menos" onClick={sumarCantidad01}>
              +
            </button>
            <p className="modal-cantidad">{cantidad01}</p>
            <button className="modal-btn-mas-menos" onClick={restarCantidad01}>
              -
            </button>
            <button onClick={agregarCarrito01} className="btn-agregar-carrito">
              <h2>Agregar $ {cantidad01 * carta[1].price}</h2>
            </button>
          </div>
        </div>
        <p>{carta[1].description}</p>
      </Modal>
      <Modal isOpen={isOpenModal02} closeModal={closeModal02}>
        <div className="modal-head">
          <img src={carta[2].image} alt={carta[2].prodName} />
          <div className="modal-tit">
            <h3>{carta[2].prodName}</h3>
            <button className="modal-btn-mas-menos" onClick={sumarCantidad02}>
              +
            </button>
            <p className="modal-cantidad">{cantidad02}</p>
            <button className="modal-btn-mas-menos" onClick={restarCantidad02}>
              -
            </button>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>Agregar $ {cantidad02 * carta[2].price}</h2>
            </button>
          </div>
        </div>
        <p>{carta[2].description}</p>
      </Modal>
      <Modal isOpen={isOpenModal03} closeModal={closeModal03}>
        <div className="modal-head">
          <img src={carta[3].image} alt={carta[3].prodName} />
          <div className="modal-tit">
            <h3>{carta[3].prodName}</h3>
            <button className="modal-btn-mas-menos" onClick={sumarCantidad03}>
              +
            </button>
            <p className="modal-cantidad">{cantidad03}</p>
            <button className="modal-btn-mas-menos" onClick={restarCantidad03}>
              -
            </button>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>Agregar $ {cantidad03 * carta[3].price}</h2>
            </button>
          </div>
        </div>
        <p>{carta[3].description}</p>
      </Modal>
      <Modal isOpen={isOpenModal04} closeModal={closeModal04}>
        <div className="modal-head">
          <img src={carta[4].image} alt={carta[4].prodName} />
          <div className="modal-tit">
            <h3>{carta[4].prodName}</h3>
            <button className="modal-btn-mas-menos" onClick={sumarCantidad04}>
              +
            </button>
            <p className="modal-cantidad">{cantidad04}</p>
            <button className="modal-btn-mas-menos" onClick={restarCantidad04}>
              -
            </button>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>Agregar $ {cantidad04 * carta[4].price}</h2>
            </button>
          </div>
        </div>
        <p>{carta[4].description}</p>
      </Modal>
      <Modal isOpen={isOpenModal05} closeModal={closeModal05}>
        <div className="modal-head">
          <img src={carta[5].image} alt={carta[5].prodName} />
          <div className="modal-tit">
            <h3>{carta[5].prodName}</h3>
            <button className="modal-btn-mas-menos" onClick={sumarCantidad05}>
              +
            </button>
            <p className="modal-cantidad">{cantidad05}</p>
            <button className="modal-btn-mas-menos" onClick={restarCantidad05}>
              -
            </button>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>Agregar $ {cantidad05 * carta[5].price}</h2>
            </button>
          </div>
        </div>
        <p>{carta[5].description}</p>
      </Modal>
    </>
  );
};

export default Main;
