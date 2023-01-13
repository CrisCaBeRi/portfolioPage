import Contact from "./Components/Contact/Contact";
import { Header } from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Presentation } from "./Components/Presentation/Presentation";





import Skills from "./Components/Skills/Skills";
import { ProjectCarosuel } from "./Components/ProjectCarousel/ProjectCarousel";

function App() {
  return (
    <>
      <Header/> 

      <Presentation/>

      <Skills/>

      <ProjectCarosuel/>   

      <Contact/>
    </> 
  );
}

export default App;
