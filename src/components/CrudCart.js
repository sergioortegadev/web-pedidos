import React from "react";
import CrudCartRow from "./CrudCartRow";

const CrudCart = ({ data, deleteData }) => {
  return (
    <div>
      <table style={{ textAlign: "center", borderSpacing: ".3rem" }}>
        <thead>
          <tr>
            <td></td>
            <th></th>
            <th>Producto</th>
            <th>$</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudCartRow key={el.id} el={el} deleteData={deleteData} />
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay nada en el pedido 😊</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudCart;
