import styles from "../styles/LoginUser.module.css"
import { useState } from "react";
import { validateUsernameAndPassword } from "../helpers/validate";
import axios from "axios"

function LoginUser() {
    const initialUserData = {
        username:'',
        password:'',
    };

    const [userData, setUserData] = useState(initialUserData);
    const [errors, setErrors] =  useState({});
    console.log(errors);
    const [isSubmitting, setSubmitting] = useState(false);
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    const handleOnSubmit  = (values, setSubmitting) => {
        setSubmitting(true);
        axios.post("http://localhost:3000/users/login", values)
          .then(res => {
            alert('Usuario logueado con exito');
            console.log("User logged in:", res.data);
            setUserData(initialUserData);
            setSubmitting(false);
          })
          .catch(err => {
            alert('Usuario o Contraseña incorrectos');
            console.error("Error details:", err.response.data);
            setSubmitting(false);
          });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const validationErrors = validateUsernameAndPassword(userData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        handleOnSubmit(userData, setSubmitting);
    }
    
    return (
        <form onSubmit={submitHandler} className={styles.div}>
            <h2>Login</h2>
            <div>
                <label >Username: </label>
                <input 
                type="text" 
                value={userData.username} 
                name='username' 
                placeholder="username"
                onChange={handleInputChange}
                className={styles.input} />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label >Password: </label>
                <input type="password" 
                value={userData.password} 
                name='password' 
                placeholder="*****"
                onChange={handleInputChange}
                className={styles.input} />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className={styles.button} >Enviar</button>
        </form>
    )
}

export default LoginUser;