import React, { useEffect } from "react";
import Aos from "aos";
import Patrik from "../../img/team/patrik.jpg";

import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div>
        <div className="hero">
          <img
            src="https://images.unsplash.com/photo-1513108500008-edfde4c0f59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
            alt="Eriksberg"
          />
          <div className="overlay"></div>
          <div class="centered text-white">Om Oss</div>
        </div>
      </div>
      <section className="text-center margin50">
        <div className="container">
          <span class="anchor" id="historik"></span>

          <section class="cards shadow" data-aos="fade-right">
            <div>
              <h2>Historik</h2>
              <p>
                Stracon är ett nyetablerat företag, till en början ett en-mans
                företag som hyr ut rådgivningstjänster med ambitionen att verka
                tillsammans med och hjälpa industri företag i och runt Göteborgs
                med en tryggare och mer hållbar tillväxt. I förlängningen vill
                företaget också erbjuda bemanningstjänster mot samma kund.
                <br />
                <br />
                Stracon som är en förkortning av orden Strandberg och
                Consulting, är namnet på företaget som etablerades 2021 i
                svallvågorna av en pandemi. Möjligheterna visade sig och
                företagets byggdes på grunden av att vilja att stötta andra i
                näringslivet som kan behöva hjälp med tid, kunskap och
                erfarenhet för stunden, oavsett om det handlar om uppbyggnad av
                en hel marknadsplattform eller förstärkning av en ägares roll i
                strategi eller ledarskap.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"
              alt="History"
              className="cardsImg"
            />
          </section>
        </div>
      </section>
      <section className="text-center margin50">
        <div className="container">
          <span class="anchor" id="affarside"></span>

          <section class="cards shadow" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"
              alt="Business Model"
              className="cardsImg"
            />
            <div>
              <h2>Affärsidé</h2>
              <p>
                Stracon ska med stort kundfokus sälja och leverera väl matchade
                kundlösningar med pålitlighet, lyhördhet och engagemang. Varje
                bemanningsuppdrag ska matchas individuellt, hållbart och
                fördomsfritt. Tjänsterna som levereras ska utveckla kompetens,
                motivation eller resultat för kunden som troligt är en snabbt
                växande liten eller medelstor organisation inom den nationella
                industri eller bygg sektorn.
              </p>
            </div>
          </section>
        </div>
      </section>
      <span class="anchor" id="kvalitet"></span>

      <section className="margin50 text-center">
        <div className="container">
          <section class="cards shadow" data-aos="fade-right">
            <div>
              <h2>Kvalitét</h2>
              <p>
                Stracon ska leverera en högre kvalitét som lever upp till och
                överträffar våra kunders förväntningar. Med en säker matchning
                genom kompetensbaserade intervjuer och effektiva
                bakgrundskontroller kvalitetssäkrar vi varje konsult innan
                påbörjat uppdrag.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"
              alt="Quality"
              className="cardsImg"
            />
          </section>
        </div>
      </section>
      <span class="anchor" id="vardegrund"></span>
      <section className="container margin50 text-center">
        <h3>Värdegrunder</h3>
        <div className="row justify-content-center mt-5 d-none d-md-flex">
          <div
            className="col-6 rounded-circle bg-light p-5 shadow"
            data-aos="fade-right"
          >
            <h4>Kundfokus</h4>innebär att göra kundens röst hörd, lyssna aktivt
            och ställa rätt frågor, detta för att förstå kundens önskan, behov
            och värderingar. Med denna information kan vi alltid leverera rätt
            erbjudande av kompetens eller tjänst till kunden.
          </div>
        </div>
        <div className="row justify-content-between mt-3 d-none d-md-flex">
          <div
            className="col-6 rounded-circle bg-light p-5 shadow "
            data-aos="fade-right"
          >
            <h4>Pålitlighet</h4> Pålitlighet grundar sig i att vår
            personal är ärlig och noga med att passa tider. Ger en bra service
            och en hög kvalité på arbete som utförs mot både interna och externa
            beställare.
          </div>
          <div
            className="col-6 rounded-circle bg-light p-5 shadow"
            data-aos="fade-right"
          >
            <h4>Engagemang</h4>Engagemang innebär att varje individ brinner för
            den egna leveransen, att ta ansvar för att bidra och skapa ett värde
            högre än själva insatsen.
          </div>
        </div>
        <div className="row justify-content-between mt-3 d-none d-md-flex">
          <div
            className="col-6 rounded-circle bg-light p-5 shadow "
            data-aos="fade-right"
          >
            <h4>Fördomsfria</h4> Fördomsfria grundar sig i att alla
            rekryteringar ska ske objektivt och fördomsfritt och med vetskapen
            att mångfald berikar.
          </div>
          <div
            className="col-6 rounded-circle bg-light p-5 shadow"
            data-aos="fade-right"
          >
            <h4>Samhällsnytta</h4>Samhällsnytta innebär att vi ska verka för att
            säkra arbetstillfälle genom våra uppdrag samt att delta i projekt
            som främjar unga och nystartade företag i regionen.
          </div>
        </div>

        <div className="row justify-content-center mt-5 d-block d-md-none">
          <div className="col bg-light shadow py-3" data-aos="fade-right">
            <h4>Kundfokus</h4>Kundfokus innebär att göra kundens röst hörd,
            lyssna aktivt och ställa rätt frågor, detta för att förstå kundens
            verkliga behov och därför alltid leverera rätt kompetens eller
            tjänst.
          </div>
        </div>
        <div className="row justify-content-between mt-3 d-block d-md-none">
          <div className="col bg-light mt-3 shadow py-3" data-aos="fade-right">
            <h4>Pålitlighet</h4> Pålitlighet grundar sig i att vår
            personal är ärlig och noga med att passa tider. Ger en bra service
            och en hög kvalité på arbete som utförs mot både interna och externa
            beställare.
          </div>
          <div className="col bg-light mt-3 shadow py-3" data-aos="fade-right">
            <h4>Engagemang</h4>Engagemang innebär att varje individ brinner för
            den egna leveransen, att ta ansvar för att bidra och skapa ett värde
            högre än själva insatsen.
          </div>
        </div>
        <div className="row justify-content-between mt-3 d-block d-md-none">
          <div className="col bg-light mt-3 shadow py-3" data-aos="fade-right">
            <h4>Fördomsfria</h4> Fördomsfria grundar sig i att alla
            rekryteringar ska ske objektivt och fördomsfritt och med vetskapen
            att mångfald berikar.
          </div>
          <div className="col bg-light mt-3 shadow py-3" data-aos="fade-right">
            <h4>Samhällsnytta</h4>Samhällsnytta innebär att vi ska verka för att
            säkra arbetstillfälle genom våra uppdrag samt att delta i projekt
            som främjar unga och nystartade företag i regionen.
          </div>
        </div>
      </section>
      <span class="anchor" id="teamet"></span>

      <section id="team" class="py-5">
        <div class="container">
          <h2 class="text-center mb-5">Vårt Team</h2>
          <div class="row text-center justify-content-center">
            <div class="col-md-6" data-aos="fade-right">
              <img
                src={Patrik}
                alt=""
                class="rounded-circle mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h4>Patrik Strandberg</h4>
              <p class="text-success">
                <i class="fas fa-award text-success mb-3"></i> VD
              </p>
              <hr />
              <p>
                <a
                  href="tel:+46(0)709-666464"
                  className=" text-decoration-none text-reset"
                >
                  <i className="fas fa-phone-square me-1"></i>+46(0)709-666464
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@stracon.se"
                  className=" text-decoration-none text-reset"
                >
                  <i className="far fa-envelope fa me-1"> </i>
                  info@stracon.se
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
