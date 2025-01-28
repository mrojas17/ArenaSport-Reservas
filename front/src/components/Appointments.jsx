import NavBar from "./NavBar";
import styles from "../views/Appointments.module.css"

const Appointments = ( ) => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            
            <main>
                <div className={styles.div}>
                    <h2>Mis Turnos Reservados</h2>
                    <table className={styles.table}>
                    <thead>
                        <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Status</th>
                        <th>Asunto</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>2025-02-01</td>
                        <td>10:00 AM</td>
                        <td>Pendiente</td>
                        <td>Fútbol</td>
                        <td>
                            <button className={styles.buttonCancel}>Cancelar</button>
                        </td>
                        </tr>
                        <tr>
                        <td>2025-02-03</td>
                        <td>5:00 PM</td>
                        <td>Confirmado</td>
                        <td>Tenis</td>
                        <td>
                            <button className={styles.buttonCancel}>Cancelar</button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <button className={styles.buttonReser}>Reservar Turno</button>
                </div>
            </main>
        </>
    )
}

export default Appointments;