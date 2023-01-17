import "./Contact.css";
import github from "./Assets/github.png";
import gmail from "./Assets/gmail.png";
import linkedin from "./Assets/linkedin.png";
import telegram from "./Assets/telegram.png";
import whatsapp from "./Assets/whatsapp.png";


export default function Contact() {
  return (
    <>
      <div className="titleContact">
        <h1>Contactáctame</h1>
        
      </div>

      <div className="backgroundContact">
        <hr />     
        <img src={github} alt="" />
        <img src={gmail} alt="" />
        <img src={linkedin} alt="" />
        <img src={telegram} alt="" />
        <img src={whatsapp} alt="" />
        <hr />        
      </div>      
    </>
  );
}
