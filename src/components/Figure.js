import React from "react";

export const Figure = ({ id, openModal, image, prodName, price }) => {
  return (
    <>
      <figure onClick={(e) => openModal(id)} className="card">
        <img src={image} alt={prodName} />
        <figcaption>
          <h3>{prodName}</h3>
          <h2>${price}</h2>
        </figcaption>
      </figure>
    </>
  );
};
