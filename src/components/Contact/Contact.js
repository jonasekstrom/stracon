import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";

import Privacy from "../common/Privacy";
import ContactUs from "../../img/bakgrunder/kontaktaoss.jpg";

import "aos/dist/aos.css";

function Contact() {
  const [human, setHuman] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })};
  const humanCheck = (e) => {
    setHuman((human) => !human);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const newData = new FormData();
    newData.append("name", formData.name);
    newData.append("email", formData.email);
    newData.append("message", formData.message);
    if (human) {
      try {
       const res = await axios
          .post("https://www.stracon.se/api/send_contact", newData)
          let {message} = res.data;
          if(message === "complete"){
            setFormStatus(true)
            setTimeout(function(){
              setFormStatus(false)
            },5000)
            setFormData({name: "",
            email: "",
            message: "",
            })
            setHuman()
          }
      } catch (err) {
      }
    }
  };

  return (
    <div>
      <div className="hero">
        <img src={ContactUs} alt="Eriksberg" />
        <div className="overlay"></div>
        <div className="centered text-white">Kontakta Oss</div>
      </div>
      <div className="container">
        <div
          className="row justify-content-start mt-5"
          data-aos="flip-up"
          data-aos-once="true"
        >
          <div className="col text-center my-auto">
            <a href="mailto:info@stracon.se" className="link-unstyled">
              <i className="far fa-envelope fa-4x d-block"> </i>
              info@stracon.se
            </a>
          </div>
          <div className="col text-center">
            <a href="tel:+46(0)709-666464" className="link-unstyled">
              <i className="fas fa-phone-square fa-4x d-block"></i>
              +46(0)709-66 64 64
            </a>
          </div>
        </div>
{/*         <div
          className="row justify-content-center margin50"
          data-aos="flip-up"
          data-aos-once="true"
        >
          <div className="col text-center">
            {" "}
            <a
              href="https://www.linkedin.com/company/74692120"
              target="_blank"
              rel="noreferrer"
              className="link-unstyled"
            >
              <i className="fab fa-linkedin fa-4x me-4"></i>
            </a>
          </div>
          <div className="col text-center">
            <i className="fab fa-facebook-square fa-4x me-4"></i>
          </div>
          <div className="col text-center">
            {" "}
            <a
              href="https://www.instagram.com/stracon.se/"
              target="_blank"
              rel="noreferrer"
              className="link-unstyled"
            >
            <i className="fab fa-instagram-square fa-4x me-4"></i>
            </a>
          </div>
        </div> */}
        <div className="container">
          <span className="anchor" id="formular"></span>

          <div className="mx-auto col col-md-8 margin50">
            <h5 className="mb-5 text-center">
              Vill du f?? en offert eller veta mer om v??ra tj??nster? Anv??nd
              kontaktformul??ret nedan, s?? kontaktar vi dig s?? snart vi har m??jlighet.
            </h5>
            {!formStatus ? (
              <form
                onSubmit={(e) => onSubmit(e)}
                className="bg-light p-5 rounded shadow-lg"
              >
                <div className="form-group">
                  <label htmlFor="name">Namn:</label>
                  <input
                    type="text"
                    className="form-control border-left-0"
                    name="name"
                    placeholder=""
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Epost:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder=""
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="meddelande">Meddelande:</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    onChange={(e) => onChange(e)}
                    required
                  ></textarea>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy"
                    onChange={(e) => humanCheck(e)}
                  />
                  <label className="form-check-label" htmlFor="policy">
                    <p>
                      Jag har l??st och accepterar Stracon Groups
                      <a
                        href="/#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="text-reset ms-1"
                      >
                        integritetspolicy
                      </a>
                    </p>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
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
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                {!human ? (
                  <button
                    type="submit"
                    className="btn btn-outline-success mt-2 disabled"
                  >
                    Skicka
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-outline-success mt-2"
                  >
                    Skicka
                  </button>
                )}
              </form>
            ) : (
              <div className="mx-auto col col-md-8 mt-5 bg-light p-5 rounded shadow-lg">
                <div className="thankyou">
                  <span>
                    <h5>Tack f??r din f??rfr??gan!</h5>
                    <br />
                    Vi h??r av oss inom kort
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
