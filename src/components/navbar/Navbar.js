import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Logo from "../../img/Stracon logo färg.JPG";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-4">
          <img
            src={Logo}
            alt="Bootstrap"
            className="img-fluid border border-white me-3"
          />
        </Link>
        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                to="/uppdrag"
                activeclassname="nav-link active text-bold"
                className="nav-link"
              >
                UPPDRAG
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/karriar"
                activeclassname="nav-link active"
                className="nav-link"
              >
                KARRIÄR
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                to="/om-oss"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                OM OSS
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                             <li>
                  <HashLink to="/om-oss#historik" className="dropdown-item">
                    Historik
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/om-oss#affarside" className="dropdown-item">
                    Affärsidé
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/om-oss#kvalitet" className="dropdown-item">
                    Kvalitet
                  </HashLink>
                  </li>
                <li>
                  <HashLink to="/om-oss#vardegrund" className="dropdown-item">
                    Värdegrunder
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/om-oss#teamet" className="dropdown-item">
                    Teamet
                  </HashLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                to="/kontakta-oss"
                activeclassname="nav-link active"
                className="nav-link"
              >
                KONTAKTA OSS
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
