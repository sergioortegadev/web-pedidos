import React from "react";

const Main = () => {
  return (
    <>
      <section className="contenedor">
        <div className="cards">
          <figure className="card">
            <img src="./assets/pizza1.jpg" alt="Pizza capresse" />
            <figcaption>
              <h3>Pizza Capresse</h3>
              <h2>$900</h2>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="./assets/pizza2.jpg" alt="Pizza capresse" />
            <figcaption>
              <h3>Tomate y Ajíes</h3>
              <h2>$950</h2>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="./assets/pizza3.jpg" alt="Pizza capresse" />
            <figcaption>
              <h3>Huevo y longaniza</h3>
              <h2>$990</h2>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="./assets/pizza4.jpg" alt="Pizza capresse" />
            <figcaption>
              <h3>Finas hierbas</h3>
              <h2>$850</h2>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="./assets/pizza1.jpg" alt="Pizza capresse" />
            <figcaption>
              <h3>Albaca y cherry</h3>
              <h2>$930</h2>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="./assets/pizza2.jpg" alt="Pizza capresse" />
            <figcaption>
              <h3>Mediterranea</h3>
              <h2>$920</h2>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Main;
