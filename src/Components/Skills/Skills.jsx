import "./Skills.css";
import imageC1 from "./Assets/Design_img.png";
import iconSkill from "./Assets/html-5.png";

export default function Skills() {
  return (
    <>
      <div className="card">
        <img src={imageC1} alt="" />
        <h3>Diseño & animación</h3>
        <p>
          Me gusta transmitir ideas complejas por medio del arte del diseño y la
          animación.
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
          <img src={iconSkill} alt="" />
          <img src={iconSkill} alt="" />
          <img src={iconSkill} alt="" />
          <img src={iconSkill} alt="" />
        </div>
      </div>
    </>
  );
}
