import React, { useState, useEffect } from "react";
// import Modal from "../components/Modal";
// import ModalConfirm from "../components/ModalConfirm";
import { useModal } from "../components/hooks/useModal";
import "../components/Modal.css";
import carta from "../db/Carta";
import { Figure } from "../components/Figure";
import { FigureModal } from "../components/FigureModal";

export const Lomos = (orderUp) => {
  /* Apertura y Cierre Ventanas Modales */
  const [isOpenModal, openModal, closeModal] = useModal(false);

  // Esta var de estado envía los datos del producto mediante props al componente FigureModal que se abre como una ventana modal
  const [data, setData] = useState({});

  function openOneModal(id) {
    setData({});
    carta.forEach((el) => {
      if (id === el.id) {
        setData({
          id: el.id,
          prodName: el.prodName,
          description: el.description,
          price: el.price,
          image: el.image,
        });
      }
    });
    openModal();
  }

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
  const agregarCarrito = () => {
    if (sessionStorage.getItem(`order`) === null) {
      item.quantity = cantidad;
      item.id = data.id;
      item.product = `${data.prodName}`;
      item.subTotal = cantidad * data.price;
      item.image = data.image;

      order.push(item);

      setMyOrder(order);
    } else {
      order = JSON.parse(sessionStorage.getItem(`order`));

      item.quantity = cantidad;
      item.id = data.id;
      item.product = `${data.prodName}`;
      item.subTotal = cantidad * data.price;
      item.image = data.image;

      /* SUMA PROD IGUALES, EVITA REPETICION. Si no existe producto con el mismo id, el contador "exist" se mantendrá en cero, entonces agrego "item" a "order", y lo mando a sessionStorage */
      let exist = 0;
      order.forEach((el) => {
        if (el.id === item.id) {
          exist++;
        }
      });
      if (exist === 0) {
        order.push(item);

        setMyOrder(order);
      } else {
        /* Recorro la orden que traje de sessionStorage, si encuentro un elemento con id igual al id del producto que intento agregar, los datos de ese producto se agregan a "existItem", luego en una nueva orden filtro la orden anterior (queda afuera el item con igual id), a la nueva orden le agrego los datos recien agregados en "existItem" y mando la nueva orden al sessionStorage */
        order.forEach((el) => {
          if (el.id === item.id) {
            existItem.quantity = el.quantity + cantidad;
            existItem.id = data.id;
            existItem.product = `${data.prodName}`;
            existItem.subTotal = (el.quantity + cantidad) * data.price;
            existItem.image = data.image;
            let newOrder = order.filter((el) => el.id !== item.id);
            newOrder.push(existItem);

            setMyOrder(newOrder);
          }
        });
      }
    }
    closeModal();
    setCantidad(1);
  };

  //  useEffect guarda en localStorage y pasa el pedido al componente padre (solamente para actualizar el número de items del carrito)
  useEffect(() => {
    setInterval(() => {
      orderUp.orderUp(myOrder);
    }, 500);
    sessionStorage.setItem(`order`, JSON.stringify(myOrder));
  }, [myOrder]);

  /* CANTIDAD de unidades para agregar al carrito, dentro de las Modales */
  const [cantidad, setCantidad] = useState(1);

  /* metodos para + y - CANTIDAD de productos */
  const sumarCantidad = () => setCantidad(cantidad + 1);
  const restarCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <>
      <section id="lomitos" className="contenedor">
        <div className="cards">
          {carta.map(
            (el) =>
              el.category === "Lomitos" && (
                <Figure
                  key={el.id}
                  id={el.id}
                  openModal={openOneModal}
                  image={el.image}
                  prodName={el.prodName}
                  price={el.price}
                />
              )
          )}
          {isOpenModal && (
            <FigureModal
              key={data.id}
              data={data}
              isOpenModal={isOpenModal}
              closeModal={closeModal}
              sumarCantidad={sumarCantidad}
              cantidad={cantidad}
              restarCantidad={restarCantidad}
              agregarCarrito={agregarCarrito}
            />
          )}
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
