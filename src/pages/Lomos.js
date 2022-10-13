import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { useModal } from "../components/hooks/useModal";
import "../components/Modal.css";
import carta from "../db/Carta";

export const Lomos = (orderUp) => {
  /* Apertura y Cierre Ventanas Modales */
  const [isOpenModal00, openModal00, closeModal00] = useModal(false);
  const [isOpenModal01, openModal01, closeModal01] = useModal(false);
  const [isOpenModal02, openModal02, closeModal02] = useModal(false);
  const [isOpenModal03, openModal03, closeModal03] = useModal(false);
  const [isOpenModal04, openModal04, closeModal04] = useModal(false);
  const [isOpenModal05, openModal05, closeModal05] = useModal(false);
  // const [isOpenConfirm, openConfirm] = useModal(false);

  // Traer o generar sessionStorage
  let myOrderInit = JSON.parse(sessionStorage.getItem("order")) || [];

  // var estado del pedido provisorio
  const [myOrder, setMyOrder] = useState(myOrderInit);

  /* - + - + -  Agregar al Carrito - + - + - */
  let item = {};
  let existItem = {};
  let order = [item];

  /*  - -  Funcion Agregar al Carrito  - -  */
  const agregarCarrito00 = () => {
    if (sessionStorage.getItem(`order`) === null) {
      item.quantity = cantidad00;
      item.id = carta[6].id;
      item.product = `${carta[6].prodName}`;
      item.subTotal = cantidad00 * carta[6].price;
      item.image = carta[6].image;

      order.push(item); // order = [...myOrder, item]
      // sessionStorage.setItem(`order`, JSON.stringify(order));
      setMyOrder(order);
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));

      item.quantity = cantidad00;
      item.id = carta[6].id;
      item.product = `${carta[6].prodName}`;
      item.subTotal = cantidad00 * carta[6].price;
      item.image = carta[6].image;

      /* SUMA PROD IGUALES, EVITA REPETICION. Si no existe producto con el mismo id, el contador "exist" se mantendrá en cero, entonces agrego "item" a "order", y lo mando a sessionStorage */
      let exist = 0;
      order.forEach((el) => {
        if (el.id === item.id) {
          exist++;
        }
      });
      if (exist === 0) {
        order.push(item); // order = [...myOrder, item]
        // sessionStorage.setItem(`order`, JSON.stringify(order));
        setMyOrder(order);
      } else {
        /* Recorro la orden que traje de sessionStorage, si encuentro un elemento con id igual al id del producto que intento agregar, los datos de ese producto se agregan a "existItem", luego en una nueva orden filtro la orden anterior (queda afuera el item con igual id), a la nueva orden le agrego los datos recien agregados en "existItem" y mando la nueva orden al sessionStorage */
        order.forEach((el) => {
          if (el.id === item.id) {
            existItem.quantity = el.quantity + cantidad00;
            existItem.id = carta[6].id;
            existItem.product = `${carta[6].prodName}`;
            existItem.subTotal = (el.quantity + cantidad00) * carta[6].price;
            existItem.image = carta[6].image;
            let newOrder = order.filter((el) => el.id !== item.id);
            newOrder.push(existItem);
            // sessionStorage.setItem(`order`, JSON.stringify(newOrder));
            setMyOrder(newOrder);
          }
        });
      }
    }
    closeModal00();
  };

  //  useEffect guarda en localStorage y pasa el pedido al componente padre (solamente para actualizar el número de items del carrito)
  useEffect(() => {
    setInterval(() => {
      orderUp.orderUp(myOrder);
    }, 500);
    sessionStorage.setItem(`order`, JSON.stringify(myOrder));
  }, [myOrder]);

  const agregarCarrito01 = () => {
    if (!sessionStorage.getItem(`order`)) {
      item.quantity = cantidad01;
      item.id = carta[7].id;
      item.product = `${carta[7].prodName}`;
      item.subTotal = cantidad01 * carta[7].price;
      item.image = carta[7].image;
      sessionStorage.setItem(`order`, JSON.stringify(order));
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));
      item.quantity = cantidad01;
      item.id = carta[7].id;
      item.product = `${carta[7].prodName}`;
      item.subTotal = cantidad01 * carta[7].price;
      item.image = carta[7].image;

      /* Si no existe producto con el mismo id, el contador "exist" se mantendrá en cero, entonces agrego "item" a "order", y lo mando a sessionStorage */
      let exist = 0;
      order.forEach((el) => {
        if (el.id === item.id) {
          exist++;
        }
      });
      if (exist === 0) {
        order.push(item);
        sessionStorage.setItem(`order`, JSON.stringify(order));
      } else {
        /* Recorro la orden que traje de sessionStorage, si encuentro un elemento con id igual al id del producto que intento agregar, los datos de ese producto se agregan a "existItem", luego en una nueva orden filtro la orden anterior (queda afuera el item con igual id), a la nueva orden le agrego los datos recien agregados en "existItem" y mando la nueva orden al sessionStorage */
        order.forEach((el) => {
          if (el.id === item.id) {
            existItem.quantity = el.quantity + cantidad01;
            existItem.id = carta[7].id;
            existItem.product = `${carta[7].prodName}`;
            existItem.subTotal = (el.quantity + cantidad01) * carta[7].price;
            existItem.image = carta[7].image;
            let newOrder = order.filter((el) => el.id !== item.id);
            newOrder.push(existItem);
            sessionStorage.setItem(`order`, JSON.stringify(newOrder));
          }
        });
      }
    }
    closeModal01();
  };

  const agregarCarrito02 = () => {
    if (!sessionStorage.getItem(`order`)) {
      item.quantity = cantidad02;
      item.id = carta[8].id;
      item.product = `${carta[8].prodName}`;
      item.subTotal = cantidad02 * carta[8].price;
      item.image = carta[8].image;
      sessionStorage.setItem(`order`, JSON.stringify(order));
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));
      item.quantity = cantidad02;
      item.id = carta[8].id;
      item.product = `${carta[8].prodName}`;
      item.subTotal = cantidad02 * carta[8].price;
      item.image = carta[8].image;

      /* Si no existe producto con el mismo id, el contador "exist" se mantendrá en cero, entonces agrego "item" a "order", y lo mando a sessionStorage */
      let exist = 0;
      order.forEach((el) => {
        if (el.id === item.id) {
          exist++;
        }
      });
      if (exist === 0) {
        order.push(item);
        sessionStorage.setItem(`order`, JSON.stringify(order));
      } else {
        /* Recorro la orden que traje de sessionStorage, si encuentro un elemento con id igual al id del producto que intento agregar, los datos de ese producto se agregan a "existItem", luego en una nueva orden filtro la orden anterior (queda afuera el item con igual id), a la nueva orden le agrego los datos recien agregados en "existItem" y mando la nueva orden al sessionStorage */
        order.forEach((el) => {
          if (el.id === item.id) {
            existItem.quantity = el.quantity + cantidad02;
            existItem.id = carta[8].id;
            existItem.product = `${carta[8].prodName}`;
            existItem.subTotal = (el.quantity + cantidad02) * carta[8].price;
            existItem.image = carta[8].image;
            let newOrder = order.filter((el) => el.id !== item.id);
            newOrder.push(existItem);
            sessionStorage.setItem(`order`, JSON.stringify(newOrder));
          }
        });
      }
    }
    closeModal02();
  };

  const agregarCarrito03 = () => {
    if (!sessionStorage.getItem(`order`)) {
      item.quantity = cantidad03;
      item.id = carta[9].id;
      item.product = `${carta[9].prodName}`;
      item.subTotal = cantidad03 * carta[9].price;
      item.image = carta[9].image;
      sessionStorage.setItem(`order`, JSON.stringify(order));
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));
      item.quantity = cantidad03;
      item.id = carta[9].id;
      item.product = `${carta[9].prodName}`;
      item.subTotal = cantidad03 * carta[9].price;
      item.image = carta[9].image;

      /* Si no existe producto con el mismo id, el contador "exist" se mantendrá en cero, entonces agrego "item" a "order", y lo mando a sessionStorage */
      let exist = 0;
      order.forEach((el) => {
        if (el.id === item.id) {
          exist++;
        }
      });
      if (exist === 0) {
        order.push(item);
        sessionStorage.setItem(`order`, JSON.stringify(order));
      } else {
        /* Recorro la orden que traje de sessionStorage, si encuentro un elemento con id igual al id del producto que intento agregar, los datos de ese producto se agregan a "existItem", luego en una nueva orden filtro la orden anterior (queda afuera el item con igual id), a la nueva orden le agrego los datos recien agregados en "existItem" y mando la nueva orden al sessionStorage */
        order.forEach((el) => {
          if (el.id === item.id) {
            existItem.quantity = el.quantity + cantidad03;
            existItem.id = carta[9].id;
            existItem.product = `${carta[9].prodName}`;
            existItem.subTotal = (el.quantity + cantidad03) * carta[9].price;
            existItem.image = carta[9].image;
            let newOrder = order.filter((el) => el.id !== item.id);
            newOrder.push(existItem);
            sessionStorage.setItem(`order`, JSON.stringify(newOrder));
          }
        });
      }
    }
    closeModal03();
  };

  const agregarCarrito04 = () => {
    if (!sessionStorage.getItem(`order`)) {
      item.quantity = cantidad04;
      item.id = carta[10].id;
      item.product = `${carta[10].prodName}`;
      item.subTotal = cantidad04 * carta[10].price;
      item.image = carta[10].image;
      sessionStorage.setItem(`order`, JSON.stringify(order));
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));
      item.quantity = cantidad04;
      item.id = carta[10].id;
      item.product = `${carta[10].prodName}`;
      item.subTotal = cantidad04 * carta[10].price;
      item.image = carta[10].image;

      /* Si no existe producto con el mismo id, el contador "exist" se mantendrá en cero, entonces agrego "item" a "order", y lo mando a sessionStorage */
      let exist = 0;
      order.forEach((el) => {
        if (el.id === item.id) {
          exist++;
        }
      });
      if (exist === 0) {
        order.push(item);
        sessionStorage.setItem(`order`, JSON.stringify(order));
      } else {
        /* Recorro la orden que traje de sessionStorage, si encuentro un elemento con id igual al id del producto que intento agregar, los datos de ese producto se agregan a "existItem", luego en una nueva orden filtro la orden anterior (queda afuera el item con igual id), a la nueva orden le agrego los datos recien agregados en "existItem" y mando la nueva orden al sessionStorage */
        order.forEach((el) => {
          if (el.id === item.id) {
            existItem.quantity = el.quantity + cantidad04;
            existItem.id = carta[10].id;
            existItem.product = `${carta[10].prodName}`;
            existItem.subTotal = (el.quantity + cantidad04) * carta[10].price;
            existItem.image = carta[10].image;
            let newOrder = order.filter((el) => el.id !== item.id);
            newOrder.push(existItem);
            sessionStorage.setItem(`order`, JSON.stringify(newOrder));
          }
        });
      }
    }
    closeModal04();
  };
  const agregarCarrito05 = () => {
    if (!sessionStorage.getItem(`order`)) {
      item.quantity = cantidad05;
      item.id = carta[11].id;
      item.product = `${carta[11].prodName}`;
      item.subTotal = cantidad05 * carta[11].price;
      item.image = carta[11].image;
      sessionStorage.setItem(`order`, JSON.stringify(order));
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));
      item.quantity = cantidad05;
      item.id = carta[11].id;
      item.product = `${carta[11].prodName}`;
      item.subTotal = cantidad05 * carta[11].price;
      item.image = carta[11].image;

      /* Si no existe producto con el mismo id, el contador "exist" se mantendrá en cero, entonces agrego "item" a "order", y lo mando a sessionStorage */
      let exist = 0;
      order.forEach((el) => {
        if (el.id === item.id) {
          exist++;
        }
      });
      if (exist === 0) {
        order.push(item);
        sessionStorage.setItem(`order`, JSON.stringify(order));
      } else {
        /* Recorro la orden que traje de sessionStorage, si encuentro un elemento con id igual al id del producto que intento agregar, los datos de ese producto se agregan a "existItem", luego en una nueva orden filtro la orden anterior (queda afuera el item con igual id), a la nueva orden le agrego los datos recien agregados en "existItem" y mando la nueva orden al sessionStorage */
        order.forEach((el) => {
          if (el.id === item.id) {
            existItem.quantity = el.quantity + cantidad05;
            existItem.id = carta[11].id;
            existItem.product = `${carta[11].prodName}`;
            existItem.subTotal = (el.quantity + cantidad05) * carta[11].price;
            existItem.image = carta[11].image;
            let newOrder = order.filter((el) => el.id !== item.id);
            newOrder.push(existItem);
            sessionStorage.setItem(`order`, JSON.stringify(newOrder));
          }
        });
      }
    }
    closeModal05();
  };

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

  return (
    <>
      <section id="lomos" className="contenedor">
        <div className="cards">
          <template id="prod-template">
            <figure>
              <img />
              <figcaption>
                <h3></h3>
                <h2></h2>
              </figcaption>
            </figure>
            <Modal isOpen={isOpenModal00} closeModal={closeModal00}>
              <div className="modal-head">
                <img src={carta[0].image} alt={carta[0].prodName} />
                <div className="modal-tit">
                  <h3>{carta[0].prodName}</h3>
                  <button
                    className="modal-btn-mas-menos"
                    onClick={sumarCantidad00}
                  >
                    +
                  </button>
                  <p className="modal-cantidad">{cantidad00}</p>
                  <button
                    className="modal-btn-mas-menos"
                    onClick={restarCantidad00}
                  >
                    -
                  </button>
                  <button
                    onClick={agregarCarrito00}
                    className="btn-agregar-carrito"
                  >
                    <h2>Agregar ${cantidad00 * carta[0].price}</h2>
                  </button>
                </div>
              </div>
              <p>{carta[0].description}</p>
            </Modal>
          </template>

          <figure onClick={openModal00} className="card">
            <img src={carta[6].image} alt={carta[6].prodName} />
            <figcaption>
              <h3>{carta[6].prodName}</h3>
              <h2>${carta[6].price}</h2>
            </figcaption>
          </figure>
          <Modal isOpen={isOpenModal00} closeModal={closeModal00}>
            <div className="modal-head">
              <img src={carta[6].image} alt={carta[6].prodName} />
              <div className="modal-tit">
                <h3>{carta[6].prodName}</h3>
                <button
                  className="modal-btn-mas-menos"
                  onClick={sumarCantidad00}
                >
                  +
                </button>
                <p className="modal-cantidad">{cantidad00}</p>
                <button
                  className="modal-btn-mas-menos"
                  onClick={restarCantidad00}
                >
                  -
                </button>
                <button
                  onClick={agregarCarrito00}
                  className="btn-agregar-carrito"
                >
                  <h2>Agregar ${cantidad00 * carta[6].price}</h2>
                </button>
              </div>
            </div>
            <p>{carta[6].description}</p>
          </Modal>

          <figure onClick={openModal01} className="card">
            <img src={carta[7].image} alt={carta[7].prodName} />
            <figcaption>
              <h3>{carta[7].prodName}</h3>
              <h2>${carta[7].price}</h2>
            </figcaption>
          </figure>
          <Modal isOpen={isOpenModal01} closeModal={closeModal01}>
            <div className="modal-head">
              <img src={carta[7].image} alt={carta[7].prodName} />
              <div className="modal-tit">
                <h3>{carta[7].prodName}</h3>
                <button
                  className="modal-btn-mas-menos"
                  onClick={sumarCantidad01}
                >
                  +
                </button>
                <p className="modal-cantidad">{cantidad01}</p>
                <button
                  className="modal-btn-mas-menos"
                  onClick={restarCantidad01}
                >
                  -
                </button>
                <button
                  onClick={agregarCarrito01}
                  className="btn-agregar-carrito"
                >
                  <h2>Agregar $ {cantidad01 * carta[7].price}</h2>
                </button>
              </div>
            </div>
            <p>{carta[7].description}</p>
          </Modal>

          <figure onClick={openModal02} className="card">
            <img src={carta[8].image} alt={carta[8].prodName} />
            <figcaption>
              <h3>{carta[8].prodName}</h3>
              <h2>${carta[8].price}</h2>
            </figcaption>
          </figure>
          <Modal isOpen={isOpenModal02} closeModal={closeModal02}>
            <div className="modal-head">
              <img src={carta[8].image} alt={carta[8].prodName} />
              <div className="modal-tit">
                <h3>{carta[8].prodName}</h3>
                <button
                  className="modal-btn-mas-menos"
                  onClick={sumarCantidad02}
                >
                  +
                </button>
                <p className="modal-cantidad">{cantidad02}</p>
                <button
                  className="modal-btn-mas-menos"
                  onClick={restarCantidad02}
                >
                  -
                </button>
                <button
                  onClick={agregarCarrito02}
                  className="btn-agregar-carrito"
                >
                  <h2>Agregar $ {cantidad02 * carta[8].price}</h2>
                </button>
              </div>
            </div>
            <p>{carta[8].description}</p>
          </Modal>

          <figure onClick={openModal03} className="card">
            <img src={carta[9].image} alt={carta[9].prodName} />
            <figcaption>
              <h3>{carta[9].prodName}</h3>
              <h2>${carta[9].price}</h2>
            </figcaption>
          </figure>
          <Modal isOpen={isOpenModal03} closeModal={closeModal03}>
            <div className="modal-head">
              <img src={carta[9].image} alt={carta[9].prodName} />
              <div className="modal-tit">
                <h3>{carta[9].prodName}</h3>
                <button
                  className="modal-btn-mas-menos"
                  onClick={sumarCantidad03}
                >
                  +
                </button>
                <p className="modal-cantidad">{cantidad03}</p>
                <button
                  className="modal-btn-mas-menos"
                  onClick={restarCantidad03}
                >
                  -
                </button>
                <button
                  onClick={agregarCarrito03}
                  className="btn-agregar-carrito"
                >
                  <h2>Agregar $ {cantidad03 * carta[9].price}</h2>
                </button>
              </div>
            </div>
            <p>{carta[9].description}</p>
          </Modal>

          <figure onClick={openModal04} className="card">
            <img src={carta[10].image} alt={carta[10].prodName} />
            <figcaption>
              <h3>{carta[10].prodName}</h3>
              <h2>${carta[10].price}</h2>
            </figcaption>
          </figure>
          <Modal isOpen={isOpenModal04} closeModal={closeModal04}>
            <div className="modal-head">
              <img src={carta[10].image} alt={carta[10].prodName} />
              <div className="modal-tit">
                <h3>{carta[10].prodName}</h3>
                <button
                  className="modal-btn-mas-menos"
                  onClick={sumarCantidad04}
                >
                  +
                </button>
                <p className="modal-cantidad">{cantidad04}</p>
                <button
                  className="modal-btn-mas-menos"
                  onClick={restarCantidad04}
                >
                  -
                </button>
                <button
                  onClick={agregarCarrito04}
                  className="btn-agregar-carrito"
                >
                  <h2>Agregar $ {cantidad04 * carta[10].price}</h2>
                </button>
              </div>
            </div>
            <p>{carta[10].description}</p>
          </Modal>

          <figure onClick={openModal05} className="card">
            <img src={carta[11].image} alt={carta[11].prodName} />
            <figcaption>
              <h3>{carta[11].prodName}</h3>
              <h2>${carta[11].price}</h2>
            </figcaption>
          </figure>
          <Modal isOpen={isOpenModal05} closeModal={closeModal05}>
            <div className="modal-head">
              <img src={carta[11].image} alt={carta[11].prodName} />
              <div className="modal-tit">
                <h3>{carta[11].prodName}</h3>
                <button
                  className="modal-btn-mas-menos"
                  onClick={sumarCantidad05}
                >
                  +
                </button>
                <p className="modal-cantidad">{cantidad05}</p>
                <button
                  className="modal-btn-mas-menos"
                  onClick={restarCantidad05}
                >
                  -
                </button>
                <button
                  onClick={agregarCarrito05}
                  className="btn-agregar-carrito"
                >
                  <h2>Agregar $ {cantidad05 * carta[11].price}</h2>
                </button>
              </div>
            </div>
            <p>{carta[11].description}</p>
          </Modal>
        </div>
        {/*  <ModalConfirm isOpen={isOpenConfirm} />
        <Modal isOpen={isOpenCart} closeModal={closeCart}>
          <h2>Mi Pedido</h2>
          {sessionStorage.getItem(`order`) && <Cart isOpen={isOpenConfirm} />}
        </Modal> */}
      </section>
    </>
  );
};
