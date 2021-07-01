import React, { useEffect, useState } from "react";
import Aos from "aos";

import Privacy from "../common/Privacy";

import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    human: false
  });

  const { name, email, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_3sfpcdg";

    sendFeedback(templateId, {
      message: message,
      name: name,
      email: email,
    });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_3lfm6ha", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };
  return (
    <div>
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1614326014420-1f0c741ca7e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          alt="Eriksberg"
        />
        <div className="overlay"></div>
        <div class="centered text-white">Kontakta Oss</div>
      </div>
      <div className="container">
        
        <div
          className="row justify-content-start mt-5"
          data-aos="flip-up"
          data-aos-once="true"
        >
           <div className="col text-center my-auto">
            
            <a
              href="mailto:info@stracon.se"
              className="link-unstyled"
            >
              <i className="far fa-envelope fa-4x d-block"> </i>
              info@stracon.se
            </a>
           
          </div>
          <div className="col text-center">
            <a
              href="tel:+46(0)709-666464"
              className="link-unstyled"
            >
              <i className="fas fa-phone-square fa-4x d-block"></i>+46(0)709-666464
            </a>
          </div>
        </div>
        <div
          className="row justify-content-center margin50"
          data-aos="flip-up"
          data-aos-once="true"
        >
          <div className="col text-center">
            {" "}
            <a href="https://www.linkedin.com/company/74692120" className="link-unstyled"><i className="fab fa-linkedin fa-4x me-4"></i></a>
          </div>
          <div className="col text-center">
            <i className="fab fa-facebook-square fa-4x me-4"></i>
          </div>
          <div className="col text-center">
            {" "}
            <i className="fab fa-instagram-square fa-4x me-4"></i>
          </div>
        </div> 
        <div className="container">
 
        <span class="anchor" id="formular"></span>

        <div className="mx-auto col col-md-8 margin50">
        <h5 className="mb-5">Vill du få en offert eller veta mer om våra tjänster? Använd kontaktformuläret nedan, så svarar vi dig så snart vi kan. 

</h5>
          <form onSubmit={(e) => onSubmit(e)} className="bg-light p-5 rounded shadow-lg">
            <div className="form-group">
              <label htmlFor="name">Namn:</label>
              <input
                type="text"
                className="form-control border-left-0"
                name="name"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Epost:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder=""
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="meddelande">Meddelande:</label>
              <textarea
                className="form-control"
                name="message"
                rows="6"
              ></textarea>
            </div>
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="policy" />
              <label className="form-check-label" htmlFor="policy">
                <p>
                  Jag har läst och accepterar Stracons
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
                        <Privacy/>
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
            <button type="submit" className="btn btn-outline-success mt-2 disabled">
              Skicka
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
