import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import styles from "./ButtonLogin.module.css";

const ButtonLogin = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser({
            username: "UsuarioEjemplo",
            contraseña: "Masyucula@123"

        });
        navigate('/'); 
    };

    const handleLogout = () => {
        setUser(null); 
        navigate('/'); 
    };

    return (
        <button 
            onClick={user ? handleLogout : handleLogin} 
            className={styles.button}
        >
            {user ? "Cerrar Sesión" : "Ingresar"}
        </button>
    );
};

export default ButtonLogin;
