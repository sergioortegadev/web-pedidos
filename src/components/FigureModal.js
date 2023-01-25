import React from "react";
import Modal from "../components/Modal";
//import { useModal } from "../components/hooks/useModal";
import "../components/Modal.css";
// import carta from "../db/Carta";

export const FigureModal = ({
  data,
  isOpenModal,
  closeModal,
  sumarCantidad,
  cantidad,
  restarCantidad,
  agregarCarrito,
}) => {
  const { image, prodName, description, price } = data;
  return (
    <>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="modal-head">
          <img src={image} alt={prodName} />
          <div className="modal-tit">
            <h3>{prodName}</h3>
            <button className="modal-btn-mas-menos" onClick={sumarCantidad}>
              +
            </button>
            <p className="modal-cantidad">{cantidad}</p>
            <button className="modal-btn-mas-menos" onClick={restarCantidad}>
              -
            </button>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>Agregar ${cantidad * price}</h2>
            </button>
          </div>
        </div>
        <p>{description}</p>
      </Modal>
    </>
  );
};
