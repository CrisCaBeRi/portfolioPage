import "./Presentation.css";
import animation from "./Assets/Animación-puma-resize.gif";
import avatar from "./Assets/img_avatar.png";



export const Presentation = () => {
  return (
    <>
      <img className="Animation" src={animation} alt="" />   
      
      <div className="profile">
        <span> Bievenido a mi portafolio! </span>

        <h3>Mi nombre es Cristian Camilo Betancourt Rincon</h3>
        <img src={avatar} alt="profileimg" />

        <p>
          Soy desarrollador web Fullstack , tecnólogo en Producción Multimedia y
          Comunicador Social con enfásis en desarrollo audiovisual. Tengo
          conocimientos en el campo del diseño gráfico, animación y diseño web
          tanto Frontend como Backend, bases de datos y algunas librerías de
          desarrollo. Manejo programas de edición de video, radio e imagen de
          manera profesional. Te invito a conocer más sobre mí!
        </p>
        <button className="downloadCv">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/13HS3BI-NNeu5HDnWt8nBpgnTu2VhLowg/view?usp=share_link"
            rel="noreferrer"
          >
            <h4> Descarga C.V</h4>
          </a>
        </button>
      </div>      
    </>
  );
};
