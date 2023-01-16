import "./Carousel.css";
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

import github from "../Skills/Assets/card2/github-sign.png";
import vercel from "./Assets/vercel.svg";

import devLogo from "./Assets/Dev.png";

export const ProjectCarosuel = () => {
  const data = ProjectsData;

  return (
    <>
      <div className="backgroundTr">
        <h1>Trabajos recientes</h1>
        <img src={devLogo} alt="" />
      </div>
      {/* function inside {} | remember when you are in the return, you will script on render type, so if youre using a function, you have to use the {} to not have sytax problems.  */}
      {data.map((item, key) => {
        return (
          <div className="containerProjects">
            <Card className="cardProject" key={key.prItem}>
              <CardImg alt="Card image cap" src={item.prImg} />

              <CardBody>
                <CardTitle tag="h5" style={{ textAlign: "center" }}>
                  {item.prTitle}
                </CardTitle>

                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <p>Teconolgias utilizadas:</p>
                  {item.prTechnologies.map((img) => {
                    if (img === "html") {
                      return <img src={html5} alt="" />;
                    } else if (img === "css") {
                      return <img src={css} alt="" />;
                    } else if (img === "react") {
                      return <img src={react} alt="" />;
                    } else if (img === "js") {
                      return <img src={js} alt="" />;
                    }
                    return null;
                  })}                  
                </CardSubtitle>

                <CardText>
                  {item.prDescription}
                </CardText>


                <div className="navigationProject">
                  <div className="repository">
                    <p>Repositorio</p>
                    <a
                      target="_blank"
                      href={item.prRepoitory}
                      rel="noreferrer"
                    >
                      <img src={github} alt="" />
                    </a>
                  </div>
                  <div className="deploy">
                    <p>Despliegue</p>
                    <a target="_blank"
                      href={item.prDeploy}
                      rel="noreferrer">
                      <img src={vercel} alt="" />
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
};
