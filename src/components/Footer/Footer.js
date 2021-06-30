import React from "react";
import Kranmarkt from "../../img/samarbeten/Kranmarkt.png";

import BRG from "../../img/samarbeten/business-region-goteborg.png";
import SweaGroup from "../../img/kunder/Swea logo.JPG";
import WorldClass from "../../img/kunder/worldclass logo.png";
import Steeltech from "../../img/kunder/SteelTech_utan_platta_CMYK.png";
import Presto from "../../img/kunder/presto.png";
import Campreq from "../../img/kunder/campreq.png";
import NordicWellness from "../../img/kunder/Nordic Wellness_logo_NO_SYMBOL_White.png";
import NordicWellnessSmall from "../../img/kunder/Nordic Wellness_logo_2rader_white.png";

function Footer() {
  return (
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#071a86" fillOpacity="0.95" d="M0,128L720,160L1440,0L1440,320L720,320L0,320Z"></path>
</svg>
    <div className="footer container-fluid">
      <section className="container  ">
        <h3 className="text-center pb-2 ">I samarbete med</h3>
        <div className="row justify-content-center">
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto">
            <img src={Kranmarkt} alt="Kranmärkt" className="kranmarkt" />
          </div>
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto ">
            <img src={BRG} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto ">
          <h1 className="kompetensplus">Kompetens+</h1>
          </div>
  
        </div>
      </section>
      <section className="container mt-4 ">
        <h3 className="text-center pb-2 ">Några av våra kunder</h3>
        <div className="row justify-content-center">
  
          <div className="col-7 text-center mt-4 my-sm-auto ">
            <img src={NordicWellnessSmall} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto ">
            <img src={SweaGroup} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto ">
            <img src={WorldClass} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto ">
            <img src={Presto} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto ">
            <img src={Campreq} alt="Kranmärkt" className="img-fluid" />
          </div>
          <div className="col-7 col-sm-4 text-center mt-4 my-sm-auto ">
            <img src={Steeltech} alt="Kranmärkt" className="img-fluid" />
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
