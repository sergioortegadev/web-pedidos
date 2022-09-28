import React from "react";

const CrudTableRow = ({ el, deleteData }) => {
  let { image, quantity, product, subTotal, id } = el;
  return (
    <tr>
      <td>{<img src={image} alt={product} style={{ maxHeight: "50px" }} />}</td>
      <td style={{ color: "var(--main-color)", fontWeight: "bold" }}>
        {quantity}
      </td>
      <td>{product}</td>
      <td style={{ color: "#0a0", fontWeight: "bold" }}>{subTotal}</td>

      <td>
        <button className="cart-delete-btn" onClick={() => deleteData(id)}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
