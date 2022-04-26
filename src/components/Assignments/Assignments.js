import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import Uppdrag from "../../img/bakgrunder/uppdrag.jpg";
import Leadership from "../../img/bakgrunder/leadership.jpg";
import Change from "../../img/bakgrunder/change.jpg";
import Cogwheel from "../../img//bakgrunder/cogwheels.jpg";
import Brainstorm from "../../img/bakgrunder/brainstorm.jpg";
import Boardmeeting from "../../img/bakgrunder/business-idea-3683781_1920.jpg";
import Bemanning from "../../img/bakgrunder/bemanning.jpg";
import Utbildning from "../../img/bakgrunder/utbildning.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const placeholderText = [
  "Interim bemanning",
  "Affärsutveckling",
  "Rekrytering",
  "Rådgivning",
  "Styrelseuppdrag",
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
        <img src={Uppdrag} alt="Eriksberg" />
        <div className="overlay">
          <div className="centered text-white">
            Behöver du hjälp med
            <span className="text-warning"> {placeholderText[index]}</span>?
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div>
          <h1 className="text-center border-bottom border-primary">
            Vad kan du förvänta dig när du anlitar oss?
          </h1>
          <p className="mt-3 text-center">
            Vi på Stracon vet att företag i snabb tillväxt ställs inför problem
            runt en viss omsättningsnivå men också när antalet anställda rullar
            över ett visst antal, då finns vi där med vår marknads och sälj
            erfarenhet som kan coacha och ge ett stöd för att hjälpa bolaget
            vidare med minsta möjlig tapp. Vi vill göra ett avtryck i din
            organisation som innebär en trygg och hållbar utveckling, vi drivs
            av att stötta dig i din tillväxt så att du kan anställa fler
            personer och genom det tillsammans med oss göra en samhällsnytta.
            Oavsett var i din marknadsfunktion det behövs support så kan vi
            matcha ditt behov med våra konsulter, vare sig det är rådgivning
            några timmar i veckan eller en längre bemannings lösning som behövs.
            När du anlitar Stracon så kan du förvänta dig att bli behandlad med
            respekt, vi fokuserar på dig, din trygghet och att göra hållbara
            förändringar tillsammans. När vårt arbete är implementerat så finns
            vi fortfarande här för dig, antingen reaktivt vid kontakt, eller som
            en fast marknadsrådgivare på ledningsgrupp eller styrelsemöten.
            Kontakta oss gärna för en kostnadsfri konsultation.
          </p>
        </div>
      </div>
      <div className="container pt-5">
        <section className="mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
            <div className="col" data-aos="fade-right">
              <div className="card h-100">
                <img src={Brainstorm} className="card-img-top" alt="..." />
                <h5 className="card-title text-center pt-2">Interim bemanning </h5>
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-md-left">
                  Vi hjälper vår kund med att snabbt tillsätta utsatta marknadstjänster vid tex. sjukdom, uppsägning eller planerade resursökningar och marknadsinsatser
                  </p>

                  <HashLink
                    to="/kontakta-oss#formular"
                    className="cta align-self-end mt-auto"
                  >
                    <span>Gratis konsultation</span>
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div className="card h-100">
                <img src={Cogwheel} className="card-img-top" alt="..." />
                <h5 className="card-title text-center pt-2">Affärsutveckling </h5>
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-md-left">
                  Marknader och branscher rör sig snabbt, en lojal kund idag, köper av någon annan i morgon. Just Därför behövs Stracon, företaget som byggdes med drivkraften att vilja stötta organisationer i tillväxtfas och har en naturlig plats i det lokala näringslivet 
                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="cta align-self-end mt-auto"
                  >
                    <span>Gratis konsultation</span>
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div className="card h-100">
                <img src={Bemanning} className="card-img-top" alt="..." />
                <h5 className="card-title text-center pt-2">Rekrytering </h5>
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-md-left">
                  Med vårt kompetensbaserade tillvägagångsätt hittar vi den mest lämpade kandidaten för ditt uppdrag, vi gör ditt beslut enkelt
                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="cta align-self-end mt-auto"
                  >
                    <span>Gratis konsultation</span>
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div className="card h-100">
                <img src={Change} className="card-img-top" alt="..." />
                <h5 className="card-title text-center pt-2">Rådgivning</h5>
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-md-left">
                  Ledarskap - Leda, motivera, coacha individer eller arbetsgrupper <br /><br />
Utbildning - Utbilda säljare, tekniker, eller montörer i försäljningsteknik

                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="cta align-self-end mt-auto"
                  >
                    <span>Gratis konsultation</span>
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-right">
              <div className="card h-100">
                <img src={Boardmeeting} className="card-img-top" alt="..." />
                <h5 className="card-title text-center pt-2">Styrelseuppdrag</h5>
                <div className="card-body d-flex flex-column">
                  <p className="card-text text-md-left">
                  Driver styrelsen framåt, som fullvärdig medlem eller extern resurs. Följer upp beslut och uppgifter operativt, support och expertis i affärsfrågor
                  </p>
                  <HashLink
                    to="/kontakta-oss#formular"
                    className="cta align-self-end mt-auto"
                  >
                    <span>Gratis konsultation</span>
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
