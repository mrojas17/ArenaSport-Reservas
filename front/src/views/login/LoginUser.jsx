import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validateUsernameAndPassword } from "../../helpers/validate";
import { UserContext } from "../../context/UserContext";
import styles from "./LoginUser.module.css";

function LoginUser() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: "" }); 
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateUsernameAndPassword(userData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitting(false);
            return;
        }
        setSubmitting(true);
        try {
            const loginResponse = await axios.post("http://localhost:3000/users/login", userData);
            console.log("🔹 Respuesta del servidor:", loginResponse.data);  
            setUser(loginResponse.data.users);
            console.log("✅ Usuario después de iniciar sesión:", loginResponse.data.users);
            navigate('/inicio');
        } catch (err) {
            alert('Usuario o Contraseña incorrectos');
            console.error("Error details:", err.response.data);
            setSubmitting(false);
        }
    };
    
    return (
        <form onSubmit={handleOnSubmit} className={styles.div}>
            <h2>Login</h2>
            
            <div>
                <label>Usuario: </label>
                <input 
                    type="text" 
                    value={userData.username} 
                    name='username' 
                    placeholder="usuario"
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.username ? styles.error : ""}`} 
                />
                {errors.username && <p className={styles.errorText}>{errors.username}</p>}
            </div>

            <div>
                <label>Contraseña: </label>
                <input 
                    type="password" 
                    value={userData.password} 
                    name='password' 
                    placeholder="*****"
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.password ? styles.error : ""}`} 
                />
                {errors.password && <p className={styles.errorText}>{errors.password}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.button}>
                {isSubmitting ? 'Sesion en...' : 'Iniciar Sesión'}
            </button>
        </form>
    );
}

export default LoginUser;
