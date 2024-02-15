import "./NavBar.css";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scroll, setScroll] = useState(0);
  const logo =
    "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark-new.svg?v=1";

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, [scroll]);

  const backgroundColor = scroll > 30 ? "white" : "#36587c";
  const color = scroll > 30 ? "black" : "white";
  const hoverColor = scroll > 30 ? "green" : "#303030";

  const hoverEffect = (e, color) => {
    e.target.style.color = color;
  };

  return (
    <div className="nav">
      <div style={{ backgroundColor }} className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-links">
          <a
            style={{ color }}
            onMouseOver={(e) => hoverEffect(e, hoverColor)}
            onMouseOut={(e) => hoverEffect(e, color)}
            href="#home"
          >
            Home
          </a>
          <a
            style={{ color }}
            onMouseOver={(e) => hoverEffect(e, hoverColor)}
            onMouseOut={(e) => hoverEffect(e, color)}
            href="#about"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}
