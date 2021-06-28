import React, { useEffect } from "react";
import Aos from "aos";
import Hunken from "../../img/bakgrunder/patrik.jpg";

import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
            <div className="hero">
        <img
          src={Hunken}
          alt="Eriksberg"
        />
        <div class="centered text-white text-center">
        <h2>Stracon</h2>
        <h6>Pålitlighet, Engagemang, Kundfokus</h6></div>
      </div>

      <div className="container p-5">
        <div>
          <h2 className="text-center border-bottom border-primary">
            Välkommen till Stracon
          </h2>
          <p className="mt-3 text-center">
            Stracon bidrar till att göra tillvaron lite bättre för
            företagsledningar med hjälp av utbildning, ledarskap och
            kommunikationslösningar som utvecklar människor och grupper. Vi är
            den perfekta partnern för de som vill uppnå resultat och göra
            skillnad i sina organisationer och resultat.
          </p>
        </div>
        {/* <div
          className="row row-cols-3 align-items-stretch py-5"
          data-aos="fade-right"
        >
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')",
              }}
            >
              {" "}
              <div className="card-img-overlay">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 lh-1 fw-bold">Utbildning</h2>
                  <ul className="d-flex list-unstyled mt-auto justify-content-end">
                    <li className="d-flex align-items-center ">
                      <a href="/#" className="btn btn-warning">
                        Go somewhere
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 lh-1 fw-bold">Ledarskap </h2>
                <ul className="d-flex list-unstyled mt-auto justify-content-end">
                  <li className="d-flex align-items-center ">
                    <a href="/#" className="btn btn-warning">
                      Go somewhere
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 lh-1 fw-bold">Kommunikation</h2>
                <ul className="d-flex list-unstyled mt-auto justify-content-end">
                  <li className="d-flex align-items-center ">
                    <a href="/#" className="btn btn-warning">
                      Go somewhere
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>*/}
      </div> 
      <section id="services" className="py-5 my-5 text-white">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-md-4">
              <i className="fas fa-comment fa-4x mr-4"></i>
              <hr />
              <h3>Utbildning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-home fa-4x mr-4"></i>
              <hr />
              <h3>Ledarskap</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-suitcase fa-4x mr-4"></i>
              <hr />
              <h3>Kommunikation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, debitis nam! Repudiandae, provident iste consequatur
                hic dignissimos ratione ea quae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
