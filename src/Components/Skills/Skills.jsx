import React from "react";
import { Button, CardBody, UncontrolledCollapse, Card } from "reactstrap";
import "./Skills.css";
//Import images to use in card 1
import imgCard1 from "./Assets/card1/Design_img.png";
import figma from "./Assets/card1/figma.png";
import character from "./Assets/card1/character-animator.png";
import photoshop from "./Assets/card1/adobe-photoshop.png";
import illustrator from "./Assets/card1/adobe-illustrator.png";
import animate from "./Assets/card1/animate.png";
import blender from "./Assets/card1/Blender.png";
import after from "./Assets/card1/after-effects.png";
//Import images to use in card 2
import imgCard2 from "./Assets/card2/development.png";
import html from "./Assets/card2/html-5.png";
import css from "./Assets/card2/css-3.png";
import js from "./Assets/card2/js.png";
import git from "./Assets/card2/git.png";
import bootstrap from "./Assets/card2/bootstrap.png";
import github from "./Assets/card2/github-sign.png";
import react from "./Assets/card2/react.png";
//Import images to use in card 3
import imgCard3 from "./Assets/card3/Comunications_img.png";
import audition from "./Assets/card3/audition.png";
import premiere from "./Assets/card3/premiere.png";

export default function Skills() {
  return (
    <>
      <div className="cards">
        <div className="card-container">
          <img src={imgCard1} alt="" />
          <h3>Diseño & animación</h3>
          <Button color="primary" id="toggler" style={{ margin: "15px" }}>
            Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler">
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
          </UncontrolledCollapse>
        </div>

        <div className="card-container">
          <img src={imgCard2} alt="" />
          <h3>Desarrollo</h3>
          <Button color="primary" id="toggler" style={{ margin: "15px" }}>
            Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <Card className="insideShow">
              <CardBody className="insideShow">
                <p>
                  La programación me ha permitido ampliar el alcance de mis
                  conocimientos.
                </p>
                <ul>
                  <li>Lenguajes:</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <ul>
                  <li>Herramientas de desarrollo:</li>
                  <li>Git</li>
                  <li>Bootstrap</li>
                  <li>Github</li>
                  <li>React</li>
                </ul>
                <div className="skillsIcons">
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={js} alt="" />
                  <img src={git} alt="" />
                  <img src={bootstrap} alt="" />
                  <img src={github} alt="" />
                  <img src={react} alt="" />
                </div>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>

        <div className="card-container">
          <img src={imgCard3} alt="" />
          <h3>Comunicaciones</h3>
          <Button color="primary" id="toggler" style={{ margin: "15px" }}>
            Toggle
          </Button>
          <UncontrolledCollapse toggler="#toggler">
            <Card className="insideShow">
              <CardBody className="insideShow">
                <p>
                  La comunicación resulta fundamental en cada proceso, por eso,
                  me encanta transmitir a través de cualquier producto.
                </p>
                <ul>
                  <li>Herramientas:</li>
                  <li>Premiere PRO</li>
                  <li>Adobe Audition </li>
                </ul>
                <ul>
                  <li>Conocimientos: </li>
                  <li>Implementación de estrategias de comunicación</li>
                  <li>Community Manager</li>
                  <li>Comunicación de investigación</li>
                </ul>
                <div className="skillsIcons">
                  <img src={audition} alt="" />
                  <img src={premiere} alt="" />
                </div>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </div>
      </div>
    </>
  );
}
