import "./Contact.css";
import github from "./Assets/github.png";
import gmail from "./Assets/gmail.png";
import linkedin from "./Assets/linkedin.png";
import telegram from "./Assets/telegram.png";
import whatsapp from "./Assets/whatsapp.png";

//TODO: FIX THE SIZE OF IMAGES ON DESKTOP VERSION
//TODO: ADD ANIMATION FOR THE IMAGES
export default function Contact() {
  return (
    <>
      <div className="titleContact" id="section-4">
        <h1>Contáctame</h1>
      </div>

      <div className="backgroundContact">
        <hr id="hr1" />
        <a
          href="https://github.com/CrisCaBeRi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" />
        </a>
        <a
          href="mailto:cristian.camilo.betancourt.rin@gmail.com?subject=Acabo%20de%20ver%20tu%20portafolio"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gmail} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-camilo-betancourt-rincón-909557138"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" />
        </a>
        <a href="https://t.me/CrisCaBeRi" target="_blank" rel="noreferrer">
          <img src={telegram} alt="" />
        </a>
        <a
          href="https://wa.me/+573123679015?text=Hola Cristian acabo de ver tu hoja de vida"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="" />
        </a>
        <hr id="hr2" />
      </div>
    </>
  );
}
