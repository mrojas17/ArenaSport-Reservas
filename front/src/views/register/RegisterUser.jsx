import axios from "axios";
import styles from "./RegisterUser.module.css";
import { useState } from "react";
import { validateRegisterUser } from "../../helpers/validate";

const  RegisterUser = () => {
  const initialUserData = {
    name:'',
    email:'',
    birthdate:'',
    nDni:'',
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
        axios.post("http://localhost:3000/users/register", values)
          .then(res => {
            alert('Usuario Registrado con exito');
            console.log("User register:", res.data);
            setSubmitting(false);
            setUserData(initialUserData);
          })
          .catch(err => {
            alert(' Usuario no se puede registrar');
            console.error("Error details:", err.response.data);
            setUserData(initialUserData);
            setSubmitting(false);
          });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const validationErrors = validateRegisterUser(userData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        handleOnSubmit(userData, setSubmitting);
    }
  
  return (
    <form onSubmit={submitHandler} className={styles.form} >
      <h2>Register</h2>
        <label >Nombre:</label>
      <div>
        <input 
        type="text" 
        value={userData.name} 
        name='name' 
        placeholder="name and lastname"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.name && <p>{errors.name}</p>}
        <label >Email:</label>
      <div>
        <input 
        type="text" 
        value={userData.email} 
        name='email' 
        placeholder="example@gmail.com"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.email && <p>{errors.email}</p>}
        <label >Fecha de Cumpleaños:</label>
      <div>
        <input 
        type="text" 
        value={userData.birthdate} 
        name='birthdate' 
        placeholder="dd/mm/aaaa"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.birthdate && <p>{errors.birthdate}</p>}
        <label >nDni:</label>
      <div>
        <input 
        type="number" 
        value={userData.nDni} 
        name='nDni' 
        placeholder="nDni"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.nDni && <p>{errors.nDni}</p>}
        <label >Usuario:</label>
      <div>
        <input 
        type="text" 
        value={userData.username} 
        name='username' 
        placeholder="username"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.username && <p>{errors.username}</p>}
        <label>Contraseña: </label>
      <div>
        <input 
          type="password" 
          value={userData.password} 
          name='password' 
          placeholder="*****"
          onChange={handleInputChange}
          className={`${styles.input} ${errors.password ? styles.error : ""}`} 
        />
        {errors.password && <p className={styles.errorText}>{errors.password}</p>}
      </div>+
      <div>
      <button type="submit" disabled={isSubmitting} className={styles.button} >Register</button>
      </div>
    </form>
              
         
    )
}

export default RegisterUser