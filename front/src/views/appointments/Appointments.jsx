import { useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Appointment from "../../components/Appointment/Appointment"; 
import styles from "./Appointments.module.css";

const Appointments = () => {
  const { user, userAppointments, setUserAppointments } = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
      axios
        .get(`http://localhost:3000/users/${user.id}`)
        .then((response) => {
          setUserAppointments(response.data.appointments);
        })
        .catch((error) => {
          console.error("Error details:", error.response.data);
        });
    
  }, [user, navigate, setUserAppointments]);

  const handleScheduleAppointment = () => {
    navigate("/crear-turno");
  };

  return (
    <div className={styles.appointmentsContainer}>
      <div className={styles.appointmentSchedule}>
        <h1>Mis Turnos</h1>
        <button className={styles.Button} onClick={handleScheduleAppointment}>
          Reservar turno
        </button>
      </div>
      <table className={styles.appointmentsTable}>
        <thead>
          <tr>
            <th>Asunto</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {userAppointments && userAppointments.length > 0 ? (
            userAppointments.map((turno) => <Appointment key={turno.id} {...turno} />)
          ) : (
            <tr>
              <td colSpan="5">No hay reservas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
