import styles from "./About.module.css";

const About = () => {

    return (
      <div className={styles.about}>
        <h1>Sobre Nosotros - ArenaSport Club</h1>
        <p>ArenaSport Club es un centro deportivo dedicado a fomentar la pasión por el deporte y el bienestar físico. Desde nuestra fundación, hemos trabajado para ofrecer instalaciones de primer nivel y un ambiente inclusivo para atletas de todas las edades y niveles.</p>
        
        <h2>🏆 Nuestra Misión</h2>
        <p>Inspirar y promover la actividad física a través del deporte, brindando un espacio donde la comunidad pueda disfrutar, entrenar y competir.</p>
        
        <h2>🌍 Nuestra Visión</h2>
        <p>Ser el club deportivo líder en la región, reconocido por su excelencia en instalaciones, formación deportiva y eventos comunitarios.</p>
        
        <h2>⚽ Instalaciones</h2>
        <ul>
          <li>Áreas de descanso y cafetería</li>
          <li>Cancha de fútbol 11 y fútbol 5</li>
          <li>Canchas de pádel playa</li>
          <li>Cancha de Vóley Playa</li>
          <li>Gimnasio y sala de entrenamiento</li>
        </ul>
        
        <h2>📅 Eventos y Torneos</h2>
        <p>Organizamos torneos locales, entrenamientos dirigidos por profesionales y eventos para toda la comunidad.</p>
        
        <h2>🤝 Únete a la Comunidad</h2>
        <p>Forma parte de ArenaSport Club y vive la experiencia deportiva con nosotros. ¡Te esperamos!</p>
      </div>
    );
  };
  
  export default About;
  