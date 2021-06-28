import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const placeholderText = [
  "Projektledning",
  "Ledarskap",
  "Utbildning",
  "Marknadsaktivitet",
  "Intrim Uppdrag",
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
        <section className="row row-cols-1 row-cols-md-3 g-4 margin50 justify-content-center mb-5">
          <div className="col" data-aos="fade-right">
            <div className="card bg-dark text-white">
              <img
                src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className="card-img"
                alt="harbor"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Projektledning</h5>
                <p className="card-text">
                  Genomförande av sälj/marknads projekt
                </p>
                <p className="card-text">Offert</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-right">
            <div className="card bg-dark text-white">
              <img
                src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className="card-img"
                alt="leadership"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Ledarskap</h5>
                <p className="card-text">
                  leda, motivera, coacha avdelningar eller arbetsgrupper
                </p>
                <p className="card-text">Offert</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-right">
            <div className="card bg-dark text-white">
              <img
                src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className="card-img"
                alt="Education"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Utbildning </h5>
                <p className="card-text">
                  Utbilda dina försäljare, tekniker, montörer i relations
                  försäljning
                </p>
                <p className="card-text">Offert</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-right">
            <div className="card bg-dark text-white">
              <img
                src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className="card-img"
                alt="Marketactivity"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Marknadsaktivitet </h5>
                <p className="card-text">
                  Genomförande av marknads aktiviteter, utskick,
                  marknadsanalyser
                </p>
                <p className="card-text">Offert</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-right">
            <div className="card bg-dark text-white">
              <img
                src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className="card-img"
                alt="Intimate assignment"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Interim uppdrag </h5>
                <p className="card-text">
                  snabb tillsättning, vikariat, deltid
                </p>
                <p className="card-text">Offert</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
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
                  <a href="#" class="btn btn-warning float-end">Få Offert</a>

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
                <h5 className="card-title text-center pt-2">Ledarskap </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Leda, motivera, coacha avdelningar eller arbetsgrupper
                  </p>
                  <a href="#" class="btn btn-warning float-end">Få Offert</a>

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
                <h5 className="card-title text-center pt-2">Utbildning </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Utbilda dina försäljare, tekniker, montörer i relations försäljning
                  </p>
                  <a href="#" class="btn btn-warning float-end">Få Offert</a>

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
                <h5 className="card-title text-center pt-2">Marknadsaktivitet </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Genomförande av marknads aktiviteter, utskick, marknadsanalyser


                  </p>
                  <a href="#" class="btn btn-warning float-end">Få Offert</a>

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
                <h5 className="card-title text-center pt-2">Interim uppdrag
 </h5>
                <div class="card-body">
                  <p class="card-text text-center text-md-left">
                  Snabb tillsättning, vikariat, deltid

</p>
                  <a href="#" class="btn btn-warning float-end">Få Offert</a>

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
