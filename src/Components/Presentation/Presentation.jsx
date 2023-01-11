import "./Presentation.css";
import animation from "./Assets/Animation-panther.gif";
import avatar from "./Assets/img_avatar.png";

export const Presentation = () => {
  return (
    <>
      
        <img className="Animation" src={animation} alt="" />

        <div className="profile">

          <h1>Hola! mi nombre es Cristian Camilo Betancourt Rincon</h1>
          <img src={avatar} alt="" />
          
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            inventore repudiandae molestias harum, aspernatur quasi architecto
            sequi, error, ea minima mollitia eius tempore consequuntur repellat
            atque autem incidunt iste ad.
          
          </p>
        </div>
      
    </>
  );
};
