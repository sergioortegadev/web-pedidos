import { useModal } from "./hooks/useModal";
import Modal from "./Modal";
import "./Modal.css";

const Modals = () => {
  const [isOpenModal01, openModal01, closeModal01] = useModal(false);
  const [isOpenModal02, openModal02, closeModal02] = useModal(false);
  const [isOpenModal03, openModal03, closeModal03] = useModal(false);
  const [isOpenModal04, openModal04, closeModal04] = useModal(false);
  const [isOpenModal05, openModal05, closeModal05] = useModal(false);
  const [isOpenModal06, openModal06, closeModal06] = useModal(false);

  const agregarCarrito = () => console.log("Agregar producto al carrito");

  return (
    <div>
      <h3>Componente Padre (Modals.js)</h3>
      <button onClick={openModal01}>Modal 1</button>
      <Modal isOpen={isOpenModal01} closeModal={closeModal01}>
        <div className="modal-head">
          <img src="./assets/pizza1.jpg" alt="Pizza capresse" />
          <div className="modal-tit">
            <h3>Pizza Capresse</h3>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>$900</h2>
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo
          reprehenderit nihil recusandae molestias libero maxime commodi nostrum
          sapiente odit fuga, deserunt incidunt error nesciunt omnis labore?
          Doloribus, corrupti odio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero deleniti expedita, pariatur maxime, quam nobis
          reiciendis atque porro quae qui assumenda iste veritatis! Deserunt
          tenetur maxime, rem quaerat iure dolores? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quo adipisci reprehenderit, facere
          ipsa, nulla consectetur nihil ratione earum accusamus culpa maiores at
          nobis doloribus, beatae odio mollitia commodi excepturi perspiciatis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          blanditiis eligendi dolore eveniet perspiciatis cumque, sed, at iste,
          numquam quos quia dicta quisquam quasi. Ad vel impedit consequuntur
          asperiores deserunt!k Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto sapiente eos magni cumque, recusandae dolor
          hic consectetur assumenda exercitationem libero, fuga perferendis.
          Praesentium explicabo vel quaerat eos neque quisquam ex.
        </p>
      </Modal>
      <Modal isOpen={isOpenModal02} closeModal={closeModal02}>
        <div className="modal-head">
          <img src="./assets/pizza2.jpg" alt="Tomate y Ajíes" />
          <div className="modal-tit">
            <h3>Tomate y Ajíes</h3>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>$950</h2>
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo
          reprehenderit nihil recusandae molestias libero maxime commodi nostrum
          sapiente odit fuga, deserunt incidunt error nesciunt omnis labore?
          Doloribus, corrupti odio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero deleniti expedita, pariatur maxime, quam nobis
          reiciendis atque porro quae qui assumenda iste veritatis! Deserunt
          tenetur maxime, rem quaerat iure dolores? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quo adipisci reprehenderit, facere
          ipsa, nulla consectetur nihil ratione earum accusamus culpa maiores at
          nobis doloribus, beatae odio mollitia commodi excepturi perspiciatis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          blanditiis eligendi dolore eveniet perspiciatis cumque, sed, at iste,
          numquam quos quia dicta quisquam quasi. Ad vel impedit consequuntur
          asperiores deserunt!k Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto sapiente eos magni cumque, recusandae dolor
          hic consectetur assumenda exercitationem libero, fuga perferendis.
          Praesentium explicabo vel quaerat eos neque quisquam ex.
        </p>
      </Modal>
      <Modal isOpen={isOpenModal03} closeModal={closeModal03}>
        <div className="modal-head">
          <img src="./assets/pizza3.jpg" alt="Huevo y longaniza" />
          <div className="modal-tit">
            <h3>Huevo y longaniza</h3>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>$990</h2>
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo
          reprehenderit nihil recusandae molestias libero maxime commodi nostrum
          sapiente odit fuga, deserunt incidunt error nesciunt omnis labore?
          Doloribus, corrupti odio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero deleniti expedita, pariatur maxime, quam nobis
          reiciendis atque porro quae qui assumenda iste veritatis! Deserunt
          tenetur maxime, rem quaerat iure dolores? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quo adipisci reprehenderit, facere
          ipsa, nulla consectetur nihil ratione earum accusamus culpa maiores at
          nobis doloribus, beatae odio mollitia commodi excepturi perspiciatis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          blanditiis eligendi dolore eveniet perspiciatis cumque, sed, at iste,
          numquam quos quia dicta quisquam quasi. Ad vel impedit consequuntur
          asperiores deserunt!k Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto sapiente eos magni cumque, recusandae dolor
          hic consectetur assumenda exercitationem libero, fuga perferendis.
          Praesentium explicabo vel quaerat eos neque quisquam ex.
        </p>
      </Modal>
      <Modal isOpen={isOpenModal04} closeModal={closeModal04}>
        <div className="modal-head">
          <img src="./assets/pizza4.jpg" alt="Finas hierbas" />
          <div className="modal-tit">
            <h3>Finas hierbas</h3>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>$850</h2>
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo
          reprehenderit nihil recusandae molestias libero maxime commodi nostrum
          sapiente odit fuga, deserunt incidunt error nesciunt omnis labore?
          Doloribus, corrupti odio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero deleniti expedita, pariatur maxime, quam nobis
          reiciendis atque porro quae qui assumenda iste veritatis! Deserunt
          tenetur maxime, rem quaerat iure dolores? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quo adipisci reprehenderit, facere
          ipsa, nulla consectetur nihil ratione earum accusamus culpa maiores at
          nobis doloribus, beatae odio mollitia commodi excepturi perspiciatis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          blanditiis eligendi dolore eveniet perspiciatis cumque, sed, at iste,
          numquam quos quia dicta quisquam quasi. Ad vel impedit consequuntur
          asperiores deserunt!k Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto sapiente eos magni cumque, recusandae dolor
          hic consectetur assumenda exercitationem libero, fuga perferendis.
          Praesentium explicabo vel quaerat eos neque quisquam ex.
        </p>
      </Modal>
      <Modal isOpen={isOpenModal05} closeModal={closeModal05}>
        <div className="modal-head">
          <img src="./assets/pizza1.jpg" alt="Albaca y cherry" />
          <div className="modal-tit">
            <h3>Albaca y cherry</h3>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>$930</h2>
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo
          reprehenderit nihil recusandae molestias libero maxime commodi nostrum
          sapiente odit fuga, deserunt incidunt error nesciunt omnis labore?
          Doloribus, corrupti odio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero deleniti expedita, pariatur maxime, quam nobis
          reiciendis atque porro quae qui assumenda iste veritatis! Deserunt
          tenetur maxime, rem quaerat iure dolores? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quo adipisci reprehenderit, facere
          ipsa, nulla consectetur nihil ratione earum accusamus culpa maiores at
          nobis doloribus, beatae odio mollitia commodi excepturi perspiciatis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          blanditiis eligendi dolore eveniet perspiciatis cumque, sed, at iste,
          numquam quos quia dicta quisquam quasi. Ad vel impedit consequuntur
          asperiores deserunt!k Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto sapiente eos magni cumque, recusandae dolor
          hic consectetur assumenda exercitationem libero, fuga perferendis.
          Praesentium explicabo vel quaerat eos neque quisquam ex.
        </p>
      </Modal>
      <Modal isOpen={isOpenModal06} closeModal={closeModal06}>
        <div className="modal-head">
          <img src="./assets/pizza2.jpg" alt="Mediterranea" />
          <div className="modal-tit">
            <h3>Mediterranea</h3>
            <button onClick={agregarCarrito} className="btn-agregar-carrito">
              <h2>$920</h2>
            </button>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad illo
          reprehenderit nihil recusandae molestias libero maxime commodi nostrum
          sapiente odit fuga, deserunt incidunt error nesciunt omnis labore?
          Doloribus, corrupti odio? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vero deleniti expedita, pariatur maxime, quam nobis
          reiciendis atque porro quae qui assumenda iste veritatis! Deserunt
          tenetur maxime, rem quaerat iure dolores? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quo adipisci reprehenderit, facere
          ipsa, nulla consectetur nihil ratione earum accusamus culpa maiores at
          nobis doloribus, beatae odio mollitia commodi excepturi perspiciatis!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
          blanditiis eligendi dolore eveniet perspiciatis cumque, sed, at iste,
          numquam quos quia dicta quisquam quasi. Ad vel impedit consequuntur
          asperiores deserunt!k Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iusto sapiente eos magni cumque, recusandae dolor
          hic consectetur assumenda exercitationem libero, fuga perferendis.
          Praesentium explicabo vel quaerat eos neque quisquam ex.
        </p>
      </Modal>
    </div>
  );
};

export default Modals;
