import "./Skills.css";
import SkillsComunication from "./SkillsComunication";
import SkillsDesign from "./SkillsDesign";
import SkillsDev from "./SkillsDev";

export const Skills = () => {
  return (
    <div className="cards" id="section-2">
      <SkillsDesign />
      <SkillsDev />
      <SkillsComunication />
    </div>
  );
};
