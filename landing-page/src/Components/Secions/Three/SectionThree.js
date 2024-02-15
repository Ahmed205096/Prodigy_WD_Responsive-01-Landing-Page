import { useEffect, useState } from "react";
import "./SectionThree.css";

export default function SectionThree() {
  const img1 =
    "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/salina-estates-lightbox/2d9d7abc-salina-cuisine-icon_103m03m000000000000028.png";
  const img2 =
    "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/salina-estates-lightbox/a501faf5-salina-beach-icon_103m03m000000000000028.png";
  const img3 =
    "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/salina-estates-lightbox/2d9d7abc-salina-cuisine-icon_103m03m000000000000028.png";

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);

  let section3Animation;
  if (window.window.screen.availWidth < 500) {
    section3Animation = scroll > 1880 ? "section3Animation" : null;
  } else {
    section3Animation = scroll > 1013.7 ? "section3Animation" : null;
  }
  return (
    <div className="fst-container">
      <div className="bg-img">
        <div
          style={{ animationName: section3Animation }}
          className="section3-content"
        >
          <div>
            <h5 className="sec3-title">
              <span className="title-custome">HELLO</span> neighbor
            </h5>
            <div className="line-sec3"></div>
            <p className="sec3-para">
              Your estate, 10 minutes away in the heart of Curaçao. Willemstad
              is bustling friend with culture, lucious food, beautiful beaches,
              and breathtaking scenery.
            </p>
          </div>
          <div className="sec3-img-container">
            <span>
              <img src={img1} alt="" className="sec3-img1"></img>
              <p>FINE CUISINE Delicious local & international cuisine.</p>
            </span>
            <span>
              <img src={img2} alt="" className="sec3-img2"></img>
              <p>BEACHES White sand beaches & aquatic activities</p>
            </span>
            <span>
              <img src={img3} alt="" className="sec3-img3"></img>
              <p>BEACHES White sand beaches & aquatic activities</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
