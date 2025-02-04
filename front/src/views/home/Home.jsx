import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css"
import voley from '../../assets/img/balonvoley.jpg'

const Home = ( ) => {
    const navigate = useNavigate();

    const HandleOnClick = (event) => {
        event.preventDefault();
        navigate('/registro')
    }


    return (
        <>
            <main>
                <div className={styles.div}>
                    <h1>Bienvenido a ArenaSport Club</h1>
                    <img src={voley} alt="Cancha deportiva" className={styles.img}/>
                    <p>Descubre el mejor lugar para disfrutar del deporte y la actividad física. 
                        Contamos con instalaciones de primer nivel para fútbol, padel playa, voley playa y más. 
                        Únete a nuestra comunidad y vive la pasión por el deporte.
                    </p>

                    <button onClick={HandleOnClick} className={styles.button} >Registrate</button>
                </div>
            </main>
        </>
    )
}

export default Home;