import "./Modal.css";

const ModalConfirm = ({ isOpen }) => {
  const handleModalClick = (e) => {
    console.log(" - - - Abrir Checkout - - - ");
  };
  return (
    <article className={`modal-confirm ${isOpen && `is-open`}`}>
      <div onClick={handleModalClick} className="modal-confirm-div">
        <h3>Confirmar Pedido</h3>
      </div>
    </article>
  );
};

export default ModalConfirm;
