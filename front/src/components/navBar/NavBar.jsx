import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import ButtonLogin from "../buttonLogin/ButtonLogin";
import logonuevo from "../../assets/img/logonuevo.png"
import { UserContext } from "../../context/UserContext";

const NavBar = () =>{

    const { user } = useContext(UserContext);
    return(
        <div className={styles.div}>
            <div className={styles.divContainerLink}>
                <Link to="/inicio">Inicio</Link>
                {user ? <Link to="/mis-turnos">Mis Turnos</Link> : null}
                <Link to="/contacto">Contacto</Link>
                <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </div>

            <div className={styles.logoContainer}>
                    <img src={logonuevo} alt="Logo" className={styles.logo}/>
            </div>

            <ButtonLogin/>
            
        </div>
    )
}

export default NavBar