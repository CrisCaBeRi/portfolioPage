import "./Carousel.css";
import { CardBody, Card, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap";


export const ProjectCarosuel = () => {
  return (
    <>
      <div className="backgroundTr">
        <h1>Trabajos recientes</h1>
      </div>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <CardLink href="#">Card Link</CardLink>          
        </CardBody>
      </Card>
    </>
  );
};
