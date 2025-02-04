import axios from "axios";
import styles from "./Schedule.module.css";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

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
                            placeholder="dd/mm/aaaa"
                            onChange={handleInputChange}
                            className={styles.input}
                        />
                    </div>

                    <div>
                        <label>Hora: </label>
                        <input 
                            type="text" 
                            value={appointmentData.time} 
                            name='time' 
                            placeholder="hh:mm"
                            onChange={handleInputChange}
                            className={styles.input}
                        />
                    </div>

                    <button type="submit" disabled={submitting} className={styles.button}>
                        Enviar
                    </button>
                </form>
    )
 }
 

export default ScheduleAppointment;