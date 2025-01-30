import styles from "../styles/Card.module.css";
import { useState } from "react";

const Appointment = ({asunto, date, time, status}) => {

    const [changeStatus, setChangesStatus] = useState(status);

    const handlerCancel = () => {
       setChangesStatus("Cancelled")
      }

  return (
    <tr className={styles.appointmentRow}>
      <td>{asunto}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{changeStatus}</td>
      <td><button onClick={handlerCancel} className={styles.cancelButton}>
        Cancelar</button>
        </td>
      
    </tr>
  );
};

export default Appointment;
