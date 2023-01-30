import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

//Import images to use in card 1
import imgCard1 from "./Assets/card1/Design_img.png";
import figma from "./Assets/card1/figma.png";
import character from "./Assets/card1/character-animator.png";
import photoshop from "./Assets/card1/adobe-photoshop.png";
import illustrator from "./Assets/card1/adobe-illustrator.png";
import animate from "./Assets/card1/animate.png";
import blender from "./Assets/card1/Blender.png";
import after from "./Assets/card1/after-effects.png";

export default function SkillsDesign(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (    
      <div className="card-container">
        <img src={imgCard1} alt="" />
        <h3>Diseño & animación</h3>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          Ver más
        </Button>

        <Collapse isOpen={isOpen} {...args}>
          <Card className="insideShow">
            <CardBody className="insideShow">
              <p>
                Me gusta transmitir ideas complejas por medio del arte del
                diseño y la animación.
              </p>
              <ul>
                <li>Herramientas de diseño:</li>
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>Animate</li>
                <li>After Effects</li>
                <li>Character Animator</li>
                <li>Blender</li>
              </ul>
              <div className="skillsIcons">
                <img src={figma} alt="" />
                <img src={photoshop} alt="" />
                <img src={illustrator} alt="" />
                <img src={animate} alt="" />
                <img src={after} alt="" />
                <img src={character} alt="" />
                <img src={blender} alt="" />
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>    
  );
}
