import styles from "../views/LoginUser.module.css"

const LoginUser = () => {
    return (
        <div className={styles.div}>
            <h2>Login</h2>

            <form className={styles.form}>
                <label >Usuario :</label>
                <input type="text" className={styles.input} />

                <label >Contraseña :</label>
                <input type="text" className={styles.input} />
            </form>
            <button type="button" className={styles.button} >Enviar</button>
        </div>
    )
}

export default LoginUser;