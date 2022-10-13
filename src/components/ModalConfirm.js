import "./Modal.css";
import { Link } from "react-router-dom";

const ModalConfirm = ({ isOpen, closeCart }) => {
  return (
    <Link to="datos" onClick={closeCart}>
      <article className={`modal-confirm ${isOpen && `is-open`}`}>
        <div className="modal-confirm-div">
          <h3>Confirmar Pedido</h3>
        </div>
      </article>
    </Link>
  );
};

export default ModalConfirm;
