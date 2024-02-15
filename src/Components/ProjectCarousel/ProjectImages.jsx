import img1 from "./Assets/1.PNG";
import img2 from "./Assets/2.PNG";
import img3 from "./Assets/3.PNG";
import img4 from "./Assets/4.PNG";
import img5 from "./Assets/5.PNG";
import img6 from "./Assets/6.PNG";
import img7 from "./Assets/7.PNG";
import img8 from "./Assets/8.PNG";
import img9 from "./Assets/9.PNG";
import img10 from "./Assets/10.PNG";
import img11 from "./Assets/11.PNG";
import img12 from "./Assets/12.PNG";
import img13 from "./Assets/13.PNG";
import img14 from "./Assets/14.PNG";
import img15 from "./Assets/15.PNG";
import img16 from "./Assets/16.PNG";
import img17 from "./Assets/17.PNG";
import img18 from "./Assets/18.PNG";
import img19 from "./Assets/19.PNG";
import img20 from "./Assets/20.PNG";
import img21 from "./Assets/21.PNG";
import img22 from "./Assets/22.PNG";
import img23 from "./Assets/23.PNG";
import img24 from "../Skills/Assets/card2/express.webp";
import img25 from "../Skills/Assets/card2/java.png";

const imageProjects = {
  wib:img1, 
  zshop:img2, 
  sbu:img3, 
  semillas:img4, 
  tetris:img5, 
  dash:img6, 
  angel:img7, 
  cadencia:img8, 
  cadenciaDes:img9, 
  legal:img10, 
  dezer:img11, 
  todo:img12, 
  arfos:img13, 
  wheel:img14, 
  sinergia:img15, 
  devflix:img16, 
  cadeLan:img17, 
  challeOne:img18, 
  introsass:img19, 
  sisVet:img20,
  sisMed:img21, 
  rhcp:img22, 
  adoptapet:img23, 
  sisMed2:img24, 
  api:img25
}

export function projectImages(nameImage)  {
  return imageProjects[nameImage]
};
