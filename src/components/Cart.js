import React, { useState, useEffect } from "react";
import CrudCart from "./CrudCart";
import ModalConfirm from "./ModalConfirm";

const Cart = ({ isOpen, closeCart }) => {
  let sessionOrder = JSON.parse(sessionStorage.getItem(`order`));
  const [db, setDb] = useState(sessionOrder);
  // console.log(db);

  useEffect(() => {
    setDb(JSON.parse(sessionStorage.getItem(`order`)));
  }, [isOpen]);

  const deleteData = (id) => {
    /* SIN CONFIRMACION DE BORRADO */
    let newData = db.filter((el) => el.id !== id);
    sessionStorage.setItem(`order`, JSON.stringify(newData));
    setDb(newData);

    /*  CON CONFIRMACION DE BORRADO 
    let idDelete = window.confirm(
      `¿Estás seguro de eliminar el producto ${id} ?`
    );
    if (idDelete) {
      let newData = db.filter((el) => el.id !== id);
      sessionStorage.setItem(`order`, JSON.stringify(newData));
      setDb(newData);
    } else {
      return;
    }
    */
  };

  return (
    <>
      <CrudCart data={db} deleteData={deleteData} />
      <br />
      <ModalConfirm isOpen={isOpen} closeCart={closeCart} />
    </>
  );
};

export default Cart;
