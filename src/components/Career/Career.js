import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";

import Privacy from "../common/Privacy";

import "aos/dist/aos.css";

function Career() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    birthYear: "",
    cv: null,
    other: "",
    photo: "",
    text: "",
    human: false,
  });
  const [human, setHuman] = useState(false)

  // const { name, email, message } = formData;

  const onChange = (e) => {
    console.log(formData);

    setFormData({ ...formData, [e.target.name]: e.target.value })};
    const humanCheck = (e) => {
      setHuman(human => !human)
    }
  const setSelectedFile = (e) =>{
    console.log(formData);
setFormData({...formData, [e.target.name]: e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(human){
      
      try {
       axios.post("http://localhost:4000/send_career",formData)
       .then(data =>{
         console.log(data);
        setFormData({name: "",email:"",message:"" });
       })

     } catch(err) {
     }
    }
  };

  const generateArrayOfYears = () => {
    let max = new Date().getFullYear();
    max = max - 17;
    let min = max - 60;
    let years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
    
  };
  return (
    <div>
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1614326014420-1f0c741ca7e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          alt="Eriksberg"
        />
        <div className="overlay"></div>
        <div className="centered text-white">Söker du nya utmaningar?</div>
      </div>
      <div className="container">
        <h1 className="text-center my-5">Spontanansökan</h1>
        <div className="mx-auto col col-md-8">
          Om du är intresserad av ett uppdrag hos Stracon är du välkommen att
          skicka in ditt CV och personliga brev här. Vi ser över
          spontanansökningar som kommit in med jämna mellanrum, vi kontaktar dig
          för en profileringsintervju och informationsmöte. <br/> <br/>Därefter får du
          besked om du läggs in i vårt konsultarkiv och kvalificeras till en
          djupintervju. <br/> <br/>När ett uppdrag kommer in som matchar din profil så
          kommer vi att höra av oss för ett eventuellt inledande möte med
          kunden.
        </div>

        <div className="mx-auto col col-md-8 mt-5 bg-light p-5 rounded shadow-lg">
          <form onSubmit={(e) => onSubmit(e)}>
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
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="selectBirthyear" className="form-label"
>
                Födelseår:
              </label>
              <select className="form-select form-select" id="selectBirthyear" name="birthYear" onChange={(e) => onChange(e)}>
                <option defaultValue>Födelseår</option>
                {generateArrayOfYears()}
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="formFile" className="form-label">
                CV:
              </label>
              <input className="form-control" type="file" id="formFile" name="cv" onChange={(e) => setSelectedFile(e.target.files[0])} />
            </div>
            <div className="mt-3">
              <label htmlFor="formFile" className="form-label">
                Övriga dokument:
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mt-3">
              <label htmlFor="formFile" className="form-label">
                Foto:
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mt-3">
              <label htmlFor="personligtbrev" className="form-label" >
              Beskriv kortfattat varför du är intresserad av att jobba hos Stracon.
              </label>
              <textarea className="form-control" id="personligtbrev" rows="4" name="text" onChange={(e) => onChange(e)}
></textarea>

            </div>

            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="policy" onChange={(e) => humanCheck(e)}/>
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
                          className="btn btn-outline-secondary"
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
            {!human ? <button type="submit" className="btn btn-outline-success mt-2 disabled">
              Skicka
            </button> : <button type="submit" className="btn btn-outline-success mt-2">
              Skicka
            </button>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Career;
