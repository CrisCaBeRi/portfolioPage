import "./ProjectCarousel.css";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
} from "reactstrap";
import { ProjectsData } from "./DataProjects";
import html5 from "../Skills/Assets/card2/html-5.png";
import css from "../Skills/Assets/card2/css-3.png";
import react from "../Skills/Assets/card2/react.png";
import js from "../Skills/Assets/card2/js.png";
import devLogo from "./Assets/Dev.png";
import figma from "../Skills/Assets/card1/figma.png";
import illustrator from "../Skills/Assets/card1/adobe-illustrator.png";
import xd from "../Skills/Assets/card1/xd.png";
import node from"../Skills/Assets/card2/node.png";
import mongo from "../Skills/Assets/card2/mongo.png";
import dart from "../Skills/Assets/card2/Dart.png"; 
import firebase from "../Skills/Assets/card2/firebase.jpg"; 
export const ProjectCarosuel = () => {
  const data = ProjectsData;
  return (
    <>
      <div className="backgroundTr" id="section-3">
        <h1>Trabajos recientes</h1>
        <img src={devLogo} alt="" />
      </div>
      {/* function inside {} | remember when you are in the return, you will script on render type, so if youre using a function, you have to use the {} to not have sytax problems.  */}
      <div className="containerProjects">
        {data.map((item, key) => {
          return (
            <Card className="cardProject" key={key.prItem}>
              <CardImg
                alt="Card image cap"
                src={item.prImg}
                style={{ width: "100%", height: "150px" }}
              />
              <CardBody>
                <CardTitle tag="h5" style={{ textAlign: "center" }}>
                  {item.prTitle}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <p>Teconolgías utilizadas:</p>
                  {item.prTechnologies.map((img) => {
                    if (img === "html") {
                      return <img src={html5} alt="" />;
                    } else if (img === "css") {
                      return <img src={css} alt="" />;
                    } else if (img === "react") {
                      return <img src={react} alt="" />;
                    } else if (img === "js") {
                      return <img src={js} alt="" />;
                    } else if (img === "Figma") {
                      return <img src={figma} alt="" />;
                    } else if (img === "Illustrator") {
                      return <img src={illustrator} alt="" />;
                    } else if (img === "Adobe XD") {
                      return <img src={xd} alt="" />;
                    } else if (img === "Node Js"){
                      return <img src={node} alt="" />;
                    } else if (img === "Mongo DB"){
                      return <img src={mongo} alt="" />;
                    } else if (img === "Dart"){
                      return <img src={dart} alt="" />;
                    }else if (img === "Firebase"){
                      return <img src={firebase} alt="" />;
                    }         
                    return null; 
                  })}
                </CardSubtitle>
                <CardText className="projectDescription">
                  {item.prDescription}
                </CardText>
                <div className="navigationProject">
                  <div className="repository">
                    <a target="_blank" href={item.prRepoitory} rel="noreferrer">
                      <p>Repositorio</p>
                    </a>
                  </div>
                  <div className="deploy">
                    <a target="_blank" href={item.prDeploy} rel="noreferrer">
                      <p>Despliegue</p>
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};
