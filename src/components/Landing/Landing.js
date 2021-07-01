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
        <img src={Hunken} alt="Eriksberg" />
        <div className="overlay"></div>
        <div className="centered text-white text-center">
          <h3>Pålitlighet, Engagemang, Kundfokus</h3>
        </div>
      </div>

      <div className="container p-5">
        <div>
          <h1 className="text-center border-bottom border-primary">
            Välkommen till Stracon
          </h1>
          <p className="mt-3 text-center">
            Stracon bidrar till att göra tillvaron lite bättre för
            företagsledningar med hjälp av utbildning, ledarskap och
            kommunikationslösningar som utvecklar människor och grupper. Vi är
            den perfekta partnern för de som vill uppnå resultat och göra
            skillnad i sina organisationer och resultat.
          </p>
        </div>
      </div>
      <section id="services" className="py-5 my-5 bg-secondary text-white">
        <div className="container">
          <div className="row text-center text-white servicesIndex">
            <div className="col-md-4">
              <i className="fas fa-comment fa-4x mr-4"></i>
              <hr />
              <h3>Bemanning och rådgivningstjänster</h3>
              <p>
                Behöver ditt företag hjälp med att stärka upp säljavdelningen,
                driva ett marknadsprojekt? Skulle ni dra stor nytta av att
                coacha, motivera eller utbilda personalen? Behöver dina säljare
                ny energi och nya verktyg eller dina tekniker kunskap för att
                lyckas med merförsäljning hos kund? Stämmer något av frågorna in
                på dig och ditt behov, kontakta oss för en kostnadsfri
                konsultation och låt oss berätta vad vi kan göra för dig.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-chart-line fa-4x mr-4"></i>
              <hr />
              <h3>Ledarskap</h3>
              <p>
                Vi har en samlad gedigen erfarenhet av att leda individer och
                grupper mot ett givet mål, vi kan hjälpa dig att genomföra
                marknads aktiviteter och mäta utfallet tillsammans med
                företagets personal eller ensamma.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-user-graduate fa-4x mr-4"></i>
              <hr />
              <h3>Utbildning</h3>
              <p>
                Vi kan erbjuda utbildning på plats hos er, vi kan också anordna
                säljutbildningar med helpension i vackra lokaler med utsikt över
                havet i Sisjön. Vi kan också erbjuda individuell coachning med
                personligt upplägg och plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
