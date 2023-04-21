import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import imgCard3 from "./Assets/card3/Comunications_img.png";
import audition from "./Assets/card3/audition.png";
import premiere from "./Assets/card3/premiere.png";
export default function SkillsComunication(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="card-container">
      <img src={imgCard3} alt="" />
      <h3>Comunicaciones</h3>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Ver más
      </Button>

      <Collapse isOpen={isOpen} {...args}>
        <Card className="insideShow">
          <CardBody className="insideShow">
            <p>              
              La comunicación es la clave del éxito personal y profesional, por ende, me gusta transmitir mis conocimientos y aprendizajes a través de productos creativos.
            </p>
            <ul>
              <li>Herramientas utilizadas:</li>
              <li>Premiere PRO</li>
              <li>Adobe Audition </li>
            </ul>
            <ul>
              <li>Conocimientos & experiencia: </li>
              <li>Implementación de estrategias de comunicación</li>
              <li>Community Manager</li>
              <li>Comunicación de investigación</li>
              <li>Desarrollo de piezas audiovisuales</li>
            </ul>
            <div className="skillsIcons">
              <img src={audition} alt="" />
              <img src={premiere} alt="" />
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}