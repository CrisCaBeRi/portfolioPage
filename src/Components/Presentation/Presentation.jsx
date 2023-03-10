import "./Presentation.css";
import animation from "./Assets/Animación-puma-resize.gif";
import avatar from "./Assets/img_avatar.png";



export const Presentation = () => {
  return (
    <>
      <img className="Animation" src={animation} alt="" />   
      
      <div className="profile" id="section-1">
        <span> Bievenido a mi portafolio! </span>

        <h3>Mi nombre es Cristian Camilo Betancourt Rincon</h3>
        <img src={avatar} alt="profileimg" />

        <p>
          Soy desarrollador web Fullstack ,UX/UI Designer, Tecnólogo en Producción Multimedia y
          Comunicador Social con enfásis en desarrollo audiovisual. Tengo
          conocimientos en el campo del diseño gráfico, animación y diseño web
          tanto Frontend como Backend, bases de datos y algunas librerías de
          desarrollo. Manejo programas de edición de video, radio e imagen de
          manera profesional. Te invito a conocer más sobre mí!
        </p>
        <button className="downloadCv">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1uMZTO0wnV-YX0GtIVqFBRVPsMsgS0v7G/view?usp=sharing"
            rel="noreferrer"
          >
            <h4> Descarga C.V</h4>
          </a>
        </button>
      </div>      
    </>
  );
};
