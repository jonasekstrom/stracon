import React, {useEffect} from "react";
import Aos from 'aos';
import Hunken from "../../img/bakgrunder/2018-12-03 13.51.48.jpg"

import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    Aos.init({duration: 2000})
}, [])

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Hunken}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Stracon</h2>
              <p>
              Kundfokus, pålitlighet och engagemang.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1576256932046-62148e2efdce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Stracon</h2>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
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
        <div className="row row-cols-3 align-items-stretch py-5" data-aos="fade-right">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')",
              }}
            >              <div className="card-img-overlay">

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
        </div>
      </div>
    </div>
  );
}

export default Landing;
