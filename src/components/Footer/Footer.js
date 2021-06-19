import React from "react";
import Kranmarkt from "../../img/samarbeten/Kranmarkt.png";
import BRG from "../../img/samarbeten/business-region-goteborg-logo-vector.png";
import KompetensPlus from "../../img/samarbeten/kompetens+.JPG";
import NordicWellness from "../../img/kunder/Nordic Wellness_logo_NO_SYMBOL_White.png"

function Footer() {
  return (
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#071a86" fillOpacity="0.95" d="M0,128L720,160L1440,0L1440,320L720,320L0,320Z"></path>
</svg>
    <div className="footer container-fluid">
      <section className="container">
        <h6 className="text-center pb-2">I samarbete med</h6>
        <div className="row">
          <div className="col text-center">
            <img src={Kranmarkt} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col text-center">
            <img src={BRG} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col text-center">
            <img src={KompetensPlus} alt="Kranmärkt" className="img-fluid" />
          </div>

        </div>
      </section>
      <section className="container mt-4">
        <h6 className="text-center pb-2">Några av våra kunder</h6>
        <div className="row">
          <div className="col text-center my-auto">
            <img src={NordicWellness} alt="Kranmärkt" className="" />
          </div>
          <div className="col text-center">
            <img src={Kranmarkt} alt="Kranmärkt" className="kranmarkt" />
          </div>
          <div className="col text-center">
            <img src={Kranmarkt} alt="Kranmärkt" className="kranmarkt" />
          </div>
          <div className="col text-center">
            <img src={Kranmarkt} alt="Kranmärkt" className="kranmarkt" />
          </div>
          <div className="col text-center">
            <img src={Kranmarkt} alt="Kranmärkt" className="kranmarkt" />
          </div>
        </div>
      </section>

      <div className="row justify-content-center mt-4">
        <div className="col text-center align-self-center">
          <span>Copyright &copy; {new Date().getFullYear()} Stracon </span>
          <span>Policy</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
