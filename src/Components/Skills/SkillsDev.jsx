import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

//Import images to use in card 1
import imgCard2 from "./Assets/card2/development.png";
import html from "./Assets/card2/html-5.png";
import css from "./Assets/card2/css-3.png";
import js from "./Assets/card2/js.png";
import git from "./Assets/card2/git.png";
import bootstrap from "./Assets/card2/bootstrap.png";
import github from "./Assets/card2/github-sign.png";
import react from "./Assets/card2/react.png";
import gitlab from "./Assets/card2/gitlab.png"

export default function SkillsDev(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="card-container">
      <img src={imgCard2} alt="" />
      <h3>Desarrollo</h3>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Ver más
      </Button>

      <Collapse isOpen={isOpen} {...args}>
        <Card className="insideShow">
          <CardBody className="insideShow">
            <p>
              La programación me ha permitido ampliar el alcance de mi creatividad y adentrarme al maravillos mundo de la tecnología.
            </p>
            <ul>
              {/* //TODO: ADD NEW IMAGES OF KNOWLEDGES */}
              <li>Lenguajes:</li>
              <li>"HTML"</li>
              <li>"CSS"</li>
              <li>JavaScript</li> 
              <li>SQL</li> 
              <li>Java (Básico)</li>
              <li>Python (Básico)</li>
              <li>Flutter (Básico)</li>           
            </ul>
            <ul>
              <li>Herramientas de desarrollo:</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>Github</li>
              <li>Gitlab</li>
              <li>React</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>

            {/* //TODO: GET ANIMATIONS & LINKS FOR THE IMAGES */}
            <div className="skillsIcons">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
              <img src={git} alt="" />
              <img src={bootstrap} alt="" />
              <img src={github} alt="" />
              <img src={gitlab} alt="" />
              <img src={react} alt="" />
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
