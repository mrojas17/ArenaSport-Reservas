import styles from "../styles/RegisterUser.module.css";

const  RegisterUser = () => {
    return (
        <>

            <div className={styles.div}>
                <h2>Register</h2>

                <form className={styles.form} >
                    <label >Nombre :</label>
                    <input type="text" className={styles.input}/>

                    <label >Email :</label>
                    <input type="text" className={styles.input}/>

                    <label >Birthday :</label>
                    <input type="text" className={styles.input}/>

                    <label >nDni :</label>
                    <input type="number" className={styles.input}/>

                    <label >Usuario :</label>
                    <input type="text" className={styles.input}/>

                    <label >Constraseña :</label>
                    <input type="text" className={styles.input}/>
                </form>
                
                <button type="button" className={styles.button} >Register</button>
            </div>
        </>
    )
}

export default RegisterUser