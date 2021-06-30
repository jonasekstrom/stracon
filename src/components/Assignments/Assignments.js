import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import Leadership from "../../img/bakgrunder/leadership.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const placeholderText = [
  "Projektledning",
  "Rådgivning",
  "Bemanning",
  "Ledarskap",
  "Utbildning",
  "Interim Uppdrag",
  "Styrelsesupport"
];

function Assignments() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const timer = () => {
      setIndex((prevIndex) => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    setInterval(timer, 2000);

    //cleanup function in order clear the interval timer
    //when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="overlay">
          <div class="centered text-white">
            Behöver du hjälp med <br></br>
            <span className="text-warning">{placeholderText[index]}</span> ?
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <section className="mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            <div className="col" data-aos="fade-right">
              <div class="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  class="card-img-top"
                  alt="..."
                />
                <h5 className="card-title text-center pt-2">Rådgivning </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Management rådgivning, uppbyggnad av marknadsplattform
                  </p>

                  <HashLink
                    to="/kontakta-oss#formular"
                    className="btn btn-warning float-end"
                  >
                    Få Offert
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div class="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  class="card-img-top"
                  alt="..."
                />
                <h5 className="card-title text-center pt-2">Bemanning </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Matchande av kompetenser för akuta behov
                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="btn btn-warning float-end"
                  >
                    Få Offert
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div class="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  class="card-img-top"
                  alt="..."
                />
                <h5 className="card-title text-center pt-2">Projektledning </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Genomförande av sälj/marknads projekt
                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="btn btn-warning float-end"
                  >
                    Få Offert
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div class="card h-100">
                <img
                  src={Leadership}
                  class="card-img-top"
                  alt="..."
                />
                <h5 className="card-title text-center pt-2">
                Ledarskap
                </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Leda, motivera, coacha individer eller arbetsgrupper
                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="btn btn-warning float-end"
                  >
                    Få Offert
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div class="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  class="card-img-top"
                  alt="..."
                />
                <h5 className="card-title text-center pt-2">Utbildning</h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Utbilda säljare, tekniker, eller montörer i försäljningsteknik
                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="btn btn-warning float-end"
                  >
                    Få Offert
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div class="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  class="card-img-top"
                  alt="..."
                />
                <h5 className="card-title text-center pt-2">Interim uppdrag </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Snabb tillsättning av VD, säljchef på vikariat, deltid, heltid
                  </p>

                  <HashLink
                    to="/kontakta-oss#formular"
                    className="btn btn-warning float-end"
                  >
                    Få Offert
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div class="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  class="card-img-top"
                  alt="..."
                />
                <h5 className="card-title text-center pt-2">Styrelsesupport </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Support och expertis i marknadsfrågor
                  </p>

                  <HashLink
                    to="/kontakta-oss#formular"
                    className="btn btn-warning float-end"
                  >
                    Få Offert
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Assignments;
