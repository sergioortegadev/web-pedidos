import React, { useState, useEffect } from "react";
import CrudCart from "./CrudCart";
import ModalConfirm from "./ModalConfirm";

const Cart = (isOpen) => {
  let sessionOrder = JSON.parse(sessionStorage.getItem(`order`));
  const [db, setDb] = useState(sessionOrder);
  // console.log(db);

  useEffect(() => {
    sessionOrder = JSON.parse(sessionStorage.getItem(`order`));
  }, [db]);

  const deleteData = (id) => {
    /* SIN CONFIRMACION DE BORRADO */
    let newData = db.filter((el) => el.id !== id);
    setDb(newData);
    sessionStorage.setItem(`order`, JSON.stringify(db));
    console.log(db);

    /*  DELETE CON CONFIRMACION DE BORRADO
   let idDelete = window.confirm(
      `¿Estás seguro de eliminar el producto ${id} ?`
    );
    if (idDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    } */
  };

  return (
    <>
      <CrudCart data={db} deleteData={deleteData} />
      <br />
      <ModalConfirm isOpen={isOpen} />
    </>
  );
};

export default Cart;
