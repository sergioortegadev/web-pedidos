import "./Modal.css";
import { Link } from "react-router-dom";

const ModalConfirm = ({ isOpen, closeCart }) => {
  let total = 0;
  let sessionOrder;

  sessionOrder = JSON.parse(sessionStorage.getItem("order"));
  sessionOrder.forEach((el) => {
    total += el.subTotal;
  });

  return (
    <Link to="datos" onClick={closeCart}>
      <article className={`modal-confirm ${isOpen && `is-open`}`}>
        <div className="modal-confirm-div">
          <h3>${total} │ Confirmar Pedido</h3>
        </div>
      </article>
    </Link>
  );
};

export default ModalConfirm;
