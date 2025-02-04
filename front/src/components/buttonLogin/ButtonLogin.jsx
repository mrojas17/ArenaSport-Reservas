import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import styles from "./ButtonLogin.module.css";

const ButtonLogin = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        navigate('/'); 
    };

    const handleLogout = () => {
        setUser(null); 
        navigate('/inicio'); 
    };

    return (
        <div>
            {!user ? (
                <button 
                    onClick={handleLogin} 
                    className={styles.button}
                >
                    Ingresar
                </button>
            ) : (
                <button 
                    onClick={handleLogout} 
                    className={styles.button}
                >
                    Cerrar Sesión
                </button>
            )}
        </div>
    );
};

export default ButtonLogin;

