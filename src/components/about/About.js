import React from "react";

function About() {
  return (
    <div>
      <div>
        <div className="hero">
          <img
            src="https://images.unsplash.com/photo-1513108500008-edfde4c0f59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
            alt="Eriksberg"
          />
        </div>
      </div>

      <section className="text-center margin50">
        <div className="container">
          <section class="cards shadow" id="affarside">
            <img
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"
              alt=""
            />
            <div>
              <h2>Affärsidé</h2>
              <p>
                Stracon ska med stort fokus sälja och leverera väl matchade
                kundlösningar med pålitlighet, lyhördhet och engagemang. Varje
                bemanningsuppdrag ska matchas individuellt, noga och rätt.
                Tjänsterna som levereras ska utveckla kompetens, motivation
                eller resultat för kunden som troligt är en liten eller
                medelstor organisation inom den nationella industri eller bygg
                sektorn.
              </p>
            </div>
          </section>
        </div>
      </section>
      <section className="container margin50 text-center"  id="vision">
      <section class="cards shadow">
      <div>
              <h2>Vision</h2>
              <p>
              Stracon ska vara en av regionens ledande leverantörer av konsult uthyrning inom försäljning, och
kundkommunikation. Vårt fokus ligger mot industrisektorn och inom teknikområdena tunga lyft och
storkök
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"
              alt=""
            />

          </section>
      </section>
      <section className="container margin50 text-center">
        <h3>VÅRA VÄRDEORD</h3>
        <div className="row justify-content-center mt-5 d-none d-md-flex">
          <div className="col-6 rounded-circle bg-light p-5 shadow"><h4>Kundfokus</h4>Kundfokus innebär att göra kundens röst hörd, lyssna aktivt och ställa rätt frågor, detta för
att förstå kundens verkliga behov och därför alltid leverera rätt kompetens eller tjänst.</div>
        </div>
        <div className="row justify-content-between mt-3 d-none d-md-flex">
          <div className="col-6 rounded-circle bg-light p-5 shadow"><h4>Pålitlighet</h4> Pålitlighet grundar sig i att vår personal är ärlig och noga med att passa tider. Ger en bra
service och en hög kvalité på arbete som utförs mot både interna och externa beställare.</div>
<div className="col-6 rounded-circle bg-light p-5 shadow"><h4>Engagemang</h4>Engagemang innebär att varje individ brinner för den egna leveransen, att ta ansvar för att
bidra och skapa ett värde högre än själva insatsen.</div>


        </div>

        <div className="row justify-content-center mt-5 d-block d-md-none">
          <div className="col bg-light shadow"><h4>Kundfokus</h4>Kundfokus innebär att göra kundens röst hörd, lyssna aktivt och ställa rätt frågor, detta för
att förstå kundens verkliga behov och därför alltid leverera rätt kompetens eller tjänst.</div>
        </div>
        <div className="row justify-content-between mt-3 d-block d-md-none">
          <div className="col bg-light shadow"><h4>Pålitlighet</h4> Pålitlighet grundar sig i att vår personal är ärlig och noga med att passa tider. Ger en bra
service och en hög kvalité på arbete som utförs mot både interna och externa beställare.</div>
<div className="col bg-light mt-3 shadow"><h4>Engagemang</h4>Engagemang innebär att varje individ brinner för den egna leveransen, att ta ansvar för att
bidra och skapa ett värde högre än själva insatsen.</div>


        </div>
        
      </section>
    </div>
  );
}

export default About;
