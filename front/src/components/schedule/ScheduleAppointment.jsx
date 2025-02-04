import axios from "axios";
import styles from "./Schedule.module.css";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {validateAppointmentData} from "../../helpers/validate"

const ScheduleAppointment = () => {
  const { user } = useContext(UserContext); 
  const navigate = useNavigate();

  const initialAppointmentData = {
    asunto: "",
    date: "",
    time: "",
    status: "Active",
    userId: "", 
  };

  const [appointmentData, setAppointmentData] = useState(initialAppointmentData);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      setAppointmentData((prevData) => ({
        ...prevData,
        userId: user.id,
      }));
    }
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const validationErrors = validateAppointmentData(appointmentData);
    if (validationErrors.length > 0) {
      setErrorMessages(validationErrors); // Mostrar errores
      setSubmitting(false);
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/appointments/schedule", appointmentData);
      console.log("🔹 Turno creado:", response.data);
      setAppointmentData(initialAppointmentData);
      navigate("/mis-turnos");
    } catch (err) {
      alert("Error al programar la cita");
      console.error("Detalles del error:", err.response?.data || err.message);
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleOnSubmit} className={styles.div}>
      <h2>Reservar turno</h2>
      <div><h3>Recuerda que nuestro Horario es de:  8:00 - 22:00 </h3></div>
      
      <div>
          <label>Asunto: </label>
          <input 
              type="text" 
              value={appointmentData.asunto} 
              name='asunto' 
              placeholder="Asunto"
              onChange={handleInputChange}
              className={styles.input}
          />
      </div>

      <div>
          <label>Fecha: </label>
          <input 
              type="date" 
              value={appointmentData.date} 
              name='date' 
              onChange={handleInputChange}
              className={styles.input}
              min={new Date().toISOString().split("T")[0]}
          />
      </div>
      <div>
          <label>Hora: </label>
          <input 
              type="time" 
              value={appointmentData.time} 
              name='time'
              min="08:00" 
              max="22:00"
              onChange={handleInputChange}
              className={styles.input}
          />
      </div>

      {errorMessages.length > 0 && (
        <div className={styles.errorMessages}>
          <ul>
            {errorMessages.map((error, index) => (
              <li key={index} style={{ color: "red" }}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <button type="submit" disabled={submitting} className={styles.button}>
          Enviar
      </button>
    </form>
  )}
 

export default ScheduleAppointment;