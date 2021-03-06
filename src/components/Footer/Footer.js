import React from "react";

import Privacy from "../common/Privacy";

import Kranmarkt from "../../img/samarbeten/Kranmarkt.png";

import SweaGroup from "../../img/kunder/Swea logo.JPG";
import WorldClass from "../../img/kunder/wct.png";
import Steeltech from "../../img/kunder/SteelTech_utan_platta_CMYK.png";
import Presto from "../../img/kunder/presto.png";
import Campreq from "../../img/kunder/campreq.png";
import NordicWellnessSmall from "../../img/kunder/Nordic Wellness_logo_2rader_white.png";
import Prodeff from "../../img/samarbeten/prodeff_svart.png"
import Jemva from "../../img/samarbeten/Jemva.png"

function Footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#071a86"
          fillOpacity="0.3"
          d="M0,128L720,160L1440,0L1440,320L720,320L0,320Z"
        ></path>
      </svg>
      <div className="footer container-fluid">
        <section className="container  ">
          <h3 className="text-center pb-2 text-dark">I samarbete med</h3>

          <div className="row justify-content-center">
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto">
              <a href="https://www.prodeff.se/" target="_blank" rel="noopener noreferrer">
                <img src={Prodeff} alt="Prodeff" className="img-fluid" />
              </a>
            </div>
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto">
              <a href="https://kranmarkt.se/" target="_blank" rel="noopener noreferrer">
                <img src={Kranmarkt} alt="Kranmärkt" className="kranmarkt" />
              </a>
            </div>
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto">
              <a href="https://www.jemva.se/" target="_blank" rel="noopener noreferrer">
                <img src={Jemva} alt="Jemva" className="img-fluid" />
              </a>
            </div>

          </div>
        </section>
        <section className="container mt-4 ">
          <h3 className="text-center pb-2 text-dark">Några av våra kunder</h3>

          <div className="row justify-content-center">
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto ">
              <a
                href="https://nordicwellness.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={NordicWellnessSmall}
                  alt="Nordic Wellness"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto ">
              <a href="http://sweagroup.se/" target="_blank" rel="noopener noreferrer">
                <img src={SweaGroup} alt="Swea Group" className="kranmarkt" />
              </a>
            </div>
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto ">
              <a
                href="https://worldclasstrelleborg.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={WorldClass}
                  alt="World Class Trelleborg"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto ">
              <a
                href="https://www.prestomarine.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Presto} alt="Presto Marine" className="img-fluid" />
              </a>
            </div>
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto ">
              <a href="https://campreq.se/" target="_blank" rel="noopener noreferrer">
                <img src={Campreq} alt="Campreq" className="img-fluid" />
              </a>
            </div>
            <div className="col-7 col-sm-2 text-center mt-4 my-sm-auto ">
              <a
                href="https://www.steeltech.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Steeltech} alt="Steeltech" className="img-fluid" />
              </a>
            </div>
          </div>
        </section>

        <div className="row justify-content-center mt-4">
          <div className="col text-center align-self-center text-dark">
            <span>Copyright &copy; {new Date().getFullYear()} Stracon Group </span>
            <a
              href="/#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="text-decoration-none text-reset ms-1"
            >
              Policy
            </a>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content text-dark">
                  <div className="modal-header text-center">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Privacy policy
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Privacy />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Stäng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
