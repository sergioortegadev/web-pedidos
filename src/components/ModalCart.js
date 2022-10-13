import "./Modal.css";
import ModalConfirm from "./ModalConfirm";

const Modal = ({ children, isOpen, closeModal, closeCart }) => {
  const handleModalClick = (e) => e.stopPropagation();
  return (
    <article
      onClick={closeModal}
      className={`modal-cart ${isOpen && `is-open`}`}
    >
      <div onClick={handleModalClick} className="modal-cart-container">
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        {children}
        <ModalConfirm isOpen={isOpen} closeCart={closeCart} />
      </div>
    </article>
  );
};

export default Modal;
