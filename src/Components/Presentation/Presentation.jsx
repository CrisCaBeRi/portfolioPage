import "./Presentation.css";
import animation from "./Assets/Animación-puma-resize.gif";
import avatar from "./Assets/img_avatar.png";

import { motion } from "framer-motion";

export const Presentation = () => {
  return (
    <>
      <img className="Animation" src={animation} alt="" />

      <div className="profile" id="section-1">
        {/* //TODO: FIX THE VELOCITY OF TYPE AND THE LONG OF CHARACTERS TYPE */}
        <span> Bievenido a mi portafolio! </span>

        <h3>
          Mi nombre es <strong>Cristian Camilo Betancourt Rincon</strong>{" "}
        </h3>
        <img src={avatar} alt="profileimg" />

        <p>
          Soy desarrollador web <strong>Fullstack</strong> ,{" "}
          <strong>UX/UI</strong> Designer, Tecnólogo en{" "}
          <strong>Producción Multimedia</strong> y{" "}
          <strong>Comunicador Social </strong> con enfásis en desarrollo
          audiovisual. Tengo conocimientos en el campo del diseño gráfico,
          animación y diseño web tanto Frontend como Backend, bases de datos y
          algunas librerías de desarrollo. Manejo programas de edición de video,
          radio e imagen de manera profesional. Te invito a conocer más sobre
          mí!
        </p>

        <motion.button
          className="downloadCv"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* //TODO:FIX THE CV */}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1qau4U2N8NGcw738Au105UfyFXi1mfbwz/view?usp=sharing"
            rel="noreferrer"
          >
            <h4> Descarga C.V</h4>
          </a>
        </motion.button>              
      </div>
       
    </>
  );
};
