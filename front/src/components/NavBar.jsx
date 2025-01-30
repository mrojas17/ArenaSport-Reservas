import styles from "../styles/NavBar.module.css";
import ButtonLogin from "./ButtonLogin";
import logo from "../assets/img/logoArenaSport.png"

const NavBar = () =>{
    return(
        <div className={styles.div}>

            <nav className={styles.nav}>
                

                <ul>
                    <li>Home</li>
                    <li>Mis Turnos</li>
                    <li>Contacto</li>
                    <li>About</li>
                </ul>

            </nav>

            <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
            </div>

            <ButtonLogin/>
            
        </div>
    )
}

export default NavBar