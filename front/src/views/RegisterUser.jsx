import axios from "axios";
import styles from "../styles/RegisterUser.module.css";
import { useState } from "react";
import { validateRegisterUser } from "../helpers/validate";

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
      <div>
        <label >Nombre:</label>
        <input 
        type="text" 
        value={userData.name} 
        name='name' 
        placeholder="name and lastname"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.name && <p>{errors.name}</p>}
      <div>
        <label >Email:</label>
        <input 
        type="text" 
        value={userData.email} 
        name='email' 
        placeholder="example@gmail.com"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.email && <p>{errors.email}</p>}
      <div>
        <label >Birthdate:</label>
        <input 
        type="text" 
        value={userData.birthdate} 
        name='birthdate' 
        placeholder="dd/mm/aaaa"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.birthdate && <p>{errors.birthdate}</p>}
      <div>
        <label >nDni:</label>
        <input 
        type="number" 
        value={userData.nDni} 
        name='nDni' 
        placeholder="nDni"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.nDni && <p>{errors.nDni}</p>}
      <div>
        <label >Username:</label>
        <input 
        type="text" 
        value={userData.username} 
        name='username' 
        placeholder="username"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.username && <p>{errors.username}</p>}
      <div>
        <label >Password:</label>
        <input 
        type="text" 
        value={userData.password} 
        name='password' 
        placeholder="*****"
        onChange={handleInputChange}
        className={styles.input}/>
      </div>
      {errors.password && <p>{errors.password}</p>}
      <button type="submit" disabled={isSubmitting} className={styles.button} >Register</button>
    </form>
              
         
    )
}

export default RegisterUser