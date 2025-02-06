import axios from "axios";
import styles from "./RegisterUser.module.css";
import { useState } from "react";
import { validateRegisterUser } from "../../helpers/validate";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
   
  const navigate = useNavigate();
  const initialUserData = {
  name: '',
  email: '',
  birthdate: '',
  nDni: '',
  username: '',
  password: '',
}
  const [userData, setUserData] = useState(initialUserData);
  const [isSubmitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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
    const validationErrors = validateRegisterUser(userData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitting(false);
      return; 
    }
    setSubmitting(true);
    try {
      await axios.post("http://localhost:3000/users/register", userData);
      alert('Usuario Registrado con exito');
      setUserData(initialUserData)
      navigate("/");
    } catch (err) {
      if (err.response) {
        const errorMessage = err.response.data.details;

        if (errorMessage.includes("El email ya está registrado")) {
          alert("Este email ya está registrado");
        } 
        if(errorMessage.includes("El nombre de usuario ya está en uso")){
          alert("Este nombre de usuario ya existe");
        }
      setSubmitting(false);
      }
    };
  }
  
  return (
    <form onSubmit={handleOnSubmit} className={styles.form} >
      <h2>Register</h2>
        <label >Nombre:</label>
      <div>
        <input 
        type="text" 
        value={userData.name} 
        name='name' 
        placeholder="Nombre y Apellido"
        onChange={handleInputChange}
        className={`${styles.input} ${errors.name ? styles.error : ""}`} />
        {errors.name && <p className={styles.errorText}>{errors.name}</p>}
      </div>
        <label >Email:</label>
      <div>
        <input 
        type="text" 
        value={userData.email} 
        name='email' 
        placeholder="example@gmail.com"
        onChange={handleInputChange}
        className={`${styles.input} ${errors.email ? styles.error : ""}`} />
        {errors.email && <p className={styles.errorText}>{errors.email}</p>}
      </div>
        <label >Fecha de Cumpleaños:</label>
      <div>
        <input 
        type="date" 
        value={userData.birthdate} 
        name='birthdate' 
        placeholder="dd/mm/aaaa"
        onChange={handleInputChange}
        className={`${styles.input} ${errors.birthdate ? styles.error : ""}`} />
        {errors.birthdate && <p className={styles.errorText}>{errors.birthdate}</p>}
      </div>
        <label >nDni:</label>
      <div>
        <input 
        type="number" 
        value={userData.nDni} 
        name='nDni' 
        placeholder="nDni"
        onChange={handleInputChange}
        className={`${styles.input} ${errors.nDni ? styles.error : ""}`} />
        {errors.nDni && <p className={styles.errorText}>{errors.nDni}</p>}
      </div>
        <label >Usuario:</label>
      <div>
        <input 
        type="text" 
        value={userData.username} 
        name='username' 
        placeholder="username"
        onChange={handleInputChange}
        className={`${styles.input} ${errors.username ? styles.error : ""}`} />
        {errors.username && <p className={styles.errorText}>{errors.username}</p>}
      </div>
        <label>Contraseña: </label>
      <div>
        <input 
          type="password" 
          value={userData.password} 
          name='password' 
          placeholder="*****"
          onChange={handleInputChange}
          className={`${styles.input} ${errors.password ? styles.error : ""}`} />
        {errors.password && <p className={styles.errorText}>{errors.password}</p>}
      </div>
      {errors.length > 0 && (
              <div className={styles.errorMessages}>
                <ul>
                  {errors.map((error, index) => (
                    <li key={index} style={{ color: "red" }}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
      <div>
      <button type="submit" disabled={isSubmitting} className={styles.button} >Register</button>
      </div>
    </form>
              
         
    )
}

export default RegisterUser