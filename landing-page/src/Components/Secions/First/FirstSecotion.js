import "./FirstSection.css";

export default function FirstSecotion() {
  const imgSrc =
    "//d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/salina-estates-lightbox/62fe020f-salina-logo_101p02i000000000000028.png";
  return (
    <div className="fst-container">
        <div className="first-section-container">
      <div className="img-container">
        <img src={imgSrc} alt=""></img>
      </div>
      <p className="title">luxurious beach estate</p>
      <h6 className="price">MODERN HOME LOCATION IN THE CARIBBEAN</h6>
      <h6 className="price">PRICED AT <b>$4,603,900</b></h6>
      <div className="separator2"></div>
      <p className="sub-title">Willemstad, Curacao</p>
      <button className="btn-fst-sec">REQUEST A TOUR</button>
    </div>
    </div>
  );
}
