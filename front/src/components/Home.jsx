import NavBar from "./NavBar";
import styles from "../views/Home.module.css"

const Home = ( ) => {
    return (
        <>
            <header>
                <NavBar/>
            </header>

            <main>
                <div className={styles.div}>
                    <h2>Esta es la informacion de los servicios que ofrece esta app</h2>
                    <p>Aqui la idea es poner todo lo que puedes hacer si te vuelves miembro</p>

                    <button className={styles.button} >Registrate</button>
                </div>
            </main>
        </>
    )
}

export default Home;