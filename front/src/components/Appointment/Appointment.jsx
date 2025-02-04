import styles from "./Card.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import Modal from "../modalCancel/ModalCancel"

const Appointment = ({ id, asunto, date, time, status }) => {
  const { fetchUserAppointments } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handlerCancel = async () => {
    setSubmitting(true);
    try {
      const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      if (response.status === 201) {
        fetchUserAppointments();
      } else {
        console.error("Failed to cancel the appointment");
      }
    } catch (error) {
      console.error("Error cancelling the appointment:", error);
    }  finally {
      setSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    setIsModalOpen(true); // Abre el modal cuando se hace clic en "Cancelar"
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal si el usuario no confirma
  };

  const handleConfirmCancel = () => {
    handlerCancel(); // Cancela la cita al confirmar
    setIsModalOpen(false); // Cierra el modal tras cancelar
  };

  return (
    <tr className={styles.appointmentRow}>
      <td>{asunto}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={handleCancelClick}
          className={`${styles.cancelButton} ${status === "Cancelled" ? styles.disabledButton : ""}`}
          disabled={status === "Cancelled"}
        >
          Cancelar
        </button>
      </td>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmCancel}
        submitting={submitting}
        message="¿Estás seguro de que quieres cancelar esta cita?"
      />
    </tr>
  );
};

export default Appointment;


