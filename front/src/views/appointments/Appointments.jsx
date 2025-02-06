import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Appointment from "../../components/Appointment/Appointment";
import Modal from "../../components/modalCancel/ModalCancel";
import styles from "./Appointments.module.css";

const Appointments = () => {
  const { user, userAppointments, setUserAppointments } = useContext(UserContext);
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (user?.id) {
      axios
        .get(`http://localhost:3000/users/${user.id}`)
        .then((response) => {
          setUserAppointments(response.data.appointments);
        })
        .catch((error) => {
          console.error("Error en la petición:", error.message);
          if (error.response) {
            console.error("Detalles del error:", error.response.data);
          }
        });
    }
  }, [user, setUserAppointments]);

  const handleScheduleAppointment = () => {
    navigate("/crear-turno");
  };

  const handleOpenModal = (appointment) => {
    setModalData(appointment);
  };

  const handleCloseModal = () => {
    setModalData(null);
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
            userAppointments.map((turno) => (
              <Appointment key={turno.id} {...turno} onOpenModal={handleOpenModal} />
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay reservas</td>
            </tr>
          )}
        </tbody>
      </table>

      {modalData && (
        <Modal
          isOpen={!!modalData}
          onClose={handleCloseModal}
          onConfirm={() => {
            modalData.handlerCancel();
            handleCloseModal();
          }}
          message="¿Estás seguro de que quieres cancelar esta cita?"
        />
      )}
    </div>
  );
};

export default Appointments;
