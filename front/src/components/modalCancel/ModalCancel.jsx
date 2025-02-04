import styles from "./ModalCancel.module.css";

const Modal = ({ isOpen, onClose, onConfirm, submitting }) => {
  if (!isOpen) return null; 

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>¿Estás seguro de que deseas cancelar esta cita?</h3>
        <div className={styles.modalActions}>
          <button
            onClick={onConfirm}
            disabled={submitting}
            className={styles.confirmButton}
          >
            {submitting ? "Cancelando..." : "Confirmar Cancelación"}
          </button>
          <button onClick={onClose} className={styles.cancelButton}>
            No, mantener la cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
