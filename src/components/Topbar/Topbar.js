import React from "react";

function Topbar() {
  return (
    <section id="top-bar" className="p-3 pb-0 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {" "}
            <a
              href="tel:+46(0)709-666464"
              className=" link-unstyled"
            >
              <i className="fas fa-phone-square fa me-1"></i>+46(0)709-66 64 64
            </a>
          </div>
          <div className="col-md-5">
            <a
              href="mailto:info@stracon.se"
              className=" link-unstyled"
            >
              <i className="far fa-envelope fa me-1"> </i>
              info@stracon.se
            </a>
          </div>
          <div className="col-md-4">
            <div className="social text-right">
{/*               <a href="#" className="link-unstyled">
                <i className="fab fa-facebook fa-2x me-2"></i>
              </a> */}
              <a
                href="https://www.linkedin.com/company/74692120"
                target="_blank"
                rel="noopener noreferrer"
                className="link-unstyled"
              >
                <i className="fab fa-linkedin fa-2x me-2"></i>
              </a>
              <a href="https://www.instagram.com/stracon.se/" className="link-unstyled" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x me-2"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCh-X31OXE0_sFAWNu2M8DJg" className="link-unstyled" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topbar;
