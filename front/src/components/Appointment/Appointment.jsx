import styles from "./Card.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const Appointment = ({ id, asunto, date, time, status, onOpenModal }) => {
  const { fetchUserAppointments } = useContext(UserContext);
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <tr className={styles.appointmentRow}>
      <td>{asunto}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => onOpenModal({ id, handlerCancel })}
          className={`${styles.cancelButton} ${status === "Cancelled" ? styles.disabledButton : ""}`}
          disabled={status === "Cancelled"}
        >
          {submitting ? "Cancelando..." : "Confirmar"}
        </button>
      </td>
    </tr>
  );
};

export default Appointment;


