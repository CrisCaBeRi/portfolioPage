import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import imgCard2 from "./Assets/card2/development.png";
import html from "./Assets/card2/html-5.png";
import css from "./Assets/card2/css-3.png";
import js from "./Assets/card2/js.png";
import git from "./Assets/card2/git.png";
import bootstrap from "./Assets/card2/bootstrap.png";
import github from "./Assets/card2/github-sign.png";
import react from "./Assets/card2/react.png";
import gitlab from "./Assets/card2/gitlab.png";
import java from "./Assets/card2/java.png";
import python from "./Assets/card2/piton.png";
import dart from "./Assets/card2/Dart.png";
import node from "./Assets/card2/node.png";
import mysql from "./Assets/card2/mysql.png";
import mongo from "./Assets/card2/mongo.png";
import sql from "./Assets/card2/database.png";
import firebase from "./Assets/card2/firebase.jpg";
import sass from "./Assets/card2/sass.webp";
import bitbucket from "./Assets/card2/bitbucket.webp";
import express from "./Assets/card2/express.webp";
import spring from "./Assets/card2/spring.webp";

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
              La programación me ha permitido ampliar el alcance de mi
              creatividad y adentrarme al maravilloso mundo de la tecnología.
            </p>
            <ul>
              <li>Lenguajes:</li>
              <li>"HTML"</li>
              <li>"CSS"</li>
              <li>"SASS"</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Java (Básico)</li>
              <li>Python (Básico)</li>
              <li>Dart (Básico)</li>
            </ul>
            <ul>
              <li>Herramientas de desarrollo:</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>Github</li>
              <li>Gitlab</li>
              <li>BitBucket</li>
              <li>React</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Node JS</li>
              <li>Lit Element</li>
              <li>Express JS</li>
            </ul>
            <div className="skillsIcons">
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
              <img src={sql} alt="" />
              <img src={java} alt="" />
              <img src={python} alt="" />
              <img src={dart} alt="" />
              <img src={git} alt="" />
              <img src={bootstrap} alt="" />
              <img src={github} alt="" />
              <img src={gitlab} alt="" />
              <img src={bitbucket} alt="" />
              <img src={react} alt="" />
              <img src={mysql} alt="" />
              <img src={mongo} alt="" />
              <img src={node} alt="" />
              <img src={firebase} alt="" />
              <img src={sass} alt="" />
              <img src={express} alt="" />
              <img src={spring} alt="" />
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
