import styles from "../styles/Appointments.module.css"
import myAppointment from "../helpers/myAppointments"; 
import Card from "../components/Card"; 
import { useState } from "react";

const Appointments = () => {
const [turno, setTurnos] = useState(myAppointment);
console.log(myAppointment)

  return (
    <div className={styles.appointmentsContainer}>
      <h2>Mis Turnos</h2>
      <table className={styles.appointmentsTable}>
        <thead>
          <tr>
            <th>Asunto</th>
            <th>Fecha</th>
            <th>Duración</th>
            <th>Status</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {turno.map((turno) => (
            <Card key={turno.id} {...turno} />
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Appointments;
