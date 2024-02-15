import { useEffect, useState } from "react";
import "./SecondSection.css";

const img1 =
  "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/salina-estates-lightbox/a2e34ab1-salina-welcome-patio_100000000000000000001o.jpg";
const img2 =
  "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/salina-estates-lightbox/7215a0c6-salina-welcome-bath_100000000000000000001o.jpg";
const img3 =
  "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/salina-estates-lightbox/cefaeb04-salina-welcome-living_100000000000000000001o.jpg";

export default function SecondSection() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);

  const section2ParagraphAnimation =
    scroll >= 128.8 ? "section2ParagraphAnimation" : null;
  const section2TitleAnimation =
    scroll >= 128.8 ? "section2TitleAnimation" : null;
  const section2ImagesAnimationLeft =
    scroll >= 128.8 ? "section2ImagesAnimationLeft" : null;
  const section2ImagesAnimationRight =
    scroll >= 128.8 ? "section2ImagesAnimationRight" : null;

  return (
    <div className="fst-container">
      <div className="SecondSection">
        <p
          style={{ animationName: section2TitleAnimation }}
          className="title-sec2"
        >
          Welcome <span className="custome">HOME</span>
        </p>
        <div className="underline1" />
        <br />
        <div className="paragraph-sec2-container">
          <p
            style={{ animationName: section2ParagraphAnimation }}
            className="paragraph-sec2"
          >
            This remarkable contemporary French-Caribbean estate development
            offer breathtaking views of the ocean, mountains, and city. It
            features a unique and functional floor plan. Beautiful landscaping
            and impeccable workmanship makes it a truly valuable property
            investment.
          </p>
        </div>

        <div className="sec2-container">
          <div className="row1">
            <div
              style={{ animationName: section2ImagesAnimationLeft }}
              className="row1-col1"
            >
              <h6>
                estate <span className="custome2">FEATURES</span>
              </h6>
              <div className="underline-sec2"></div>
              <p>
                8 Bedrooms, 8 Bathrooms <br /> Living Space: 4,500 ft² <br />
                Year Built: 2014 <br /> House/Single Family
              </p>
              <div className="button-container-sec2">
                <button>SEE MORE DETAILS</button>
              </div>
            </div>

            <img
              style={{ animationName: section2ImagesAnimationRight }}
              src={img1}
              alt=""
              className="row2-col1 img1 img"
            ></img>
          </div>

          <div className="row2">
            <div className="img-container-row2">
              <img
                style={{ animationName: section2ImagesAnimationLeft }}
                src={img2}
                alt=""
                className="img2 img"
              ></img>
              <img
                style={{ animationName: section2ImagesAnimationRight }}
                src={img3}
                alt=""
                className="img3 img"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
