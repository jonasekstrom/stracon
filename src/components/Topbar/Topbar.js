import React from "react";

function Topbar() {
  return (
    <section id="top-bar" class="p-3 pb-0 text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            {" "}
            <a
              href="tel:+46(0)709-666464"
              className=" text-decoration-none text-reset"
            >
              <i className="fas fa-phone-square fa me-1"></i>+46(0)709-666464
            </a>
          </div>
          <div class="col-md-5">
            <a
              href="mailto:info@stracon.se"
              className=" text-decoration-none text-reset"
            >
              <i className="far fa-envelope fa me-1"> </i>
              info@stracon.se
            </a>
          </div>
          <div class="col-md-4">
            <div class="social text-right">
              <a href="#" className="text-reset">
                <i class="fab fa-facebook fa-2x me-2"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/74692120"
                className="text-reset"
              >
                <i class="fab fa-linkedin fa-2x me-2"></i>
              </a>
              <a href="#" className="text-reset">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topbar;
