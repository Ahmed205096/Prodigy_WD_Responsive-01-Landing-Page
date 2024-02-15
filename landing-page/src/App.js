import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import FirstSecotion from "./Components/Secions/First/FirstSecotion";
import SecondSection from "./Components/Secions/Second/SecondSection";
import SectionThree from "./Components/Secions/Three/SectionThree";
import "@fortawesome/fontawesome-free/css/all.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="separator"></div>
      <FirstSecotion />
      <SecondSection />
      <SectionThree />
      <div className="header">
        <div className="primary-content">
          <span>ahmedkhattab205096@gmail.com</span>
          
          <span>&#169; All rights reserved</span>
        </div>
        <div className="secondary-content">
          <div>
          <a
            href="https://www.linkedin.com/in/ahmed-khattab-4a390324a/"
            target="blanck"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com/ma.do.16144606/" target="blanck">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://github.com/Ahmed205096" target="blanck">
            <FontAwesomeIcon icon={faGithub}  pulse = {true}/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
