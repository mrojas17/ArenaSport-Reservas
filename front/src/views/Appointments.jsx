import styles from "../styles/Appointments.module.css"
import Card from "../components/Card"; 
import { useEffect, useState } from "react";
import axios from "axios";

const Appointments = () => {
  const [turno, setTurnos] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/appointments"

    ).then(res=>setTurnos(res.data))
    .catch(err => {
      console.error("Error response:", err.response);
      console.error("Error message:", err.message);
      console.error("Error details:", err.response.data);
    });
  }, [])

  return (
    <div className={styles.appointmentsContainer}>
      <div className={styles.appointmentSchedule} >
        <h1>Mis Turnos</h1>
        <button className={styles.Button}>Reservar turno</button>
      </div>
      <table className={styles.appointmentsTable}>
        <thead>
          <tr>
            <th>Asunto</th>
            <th>date</th>
            <th>time</th>
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
