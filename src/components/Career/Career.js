import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import Kran from "../../img/bakgrunder/photo-1614326014420-1f0c741ca7e1.jpg";
import Privacy from "../common/Privacy";

import "aos/dist/aos.css";

function Career() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [file, setFile] = useState("");
  const [otherDocuments, setOtherDocuments] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    cv: "",
    cvFileName: "",
    other: "",
    text: "",
  });
  const [human, setHuman] = useState(false);
  // const [errros, setErrors] = useState([]);
  // const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const humanCheck = (e) => {
    setHuman((human) => !human);
  };
  const setSelectedFile = (e) => {
    setFile(e.target.files[0]);
  };
  const setOtherFiles = (e) => {
    setOtherDocuments(e.target.files);
  };
 
  const onSubmit = async (e) => {
    e.preventDefault();

    const newData = new FormData();
    newData.append("file", file);
    newData.append("name", formData.name);
    newData.append("email", formData.email);
    newData.append("message", formData.message);
    for (var i = 0; i < otherDocuments.length; i++) {
      newData.append(otherDocuments[i].name, otherDocuments[i]);
    }

    if (human) {
      try {
        const res = await axios.post(
          "https://www.stracon.se/api/send_career",
          newData,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "multipart/form-data",
            },
          }
        );

        let {message} = res.data;
        if(message === "complete"){
          setFormStatus(true)
          setTimeout(function(){
            setFormStatus(false)
          },5000)
          setFormData({name: "",
          email: "",
          message: "",
          cv: "",
          cvFileName: "",
          other: "",
          text: "",})
          setHuman()
          setFile("")
          setOtherDocuments("")
        }
      } catch (err) {}
    }
  };

  return (
    <div>
      <div className="hero">
        <img
          src={Kran}
          alt="Eriksberg"
        />
        <div className="overlay"></div>
        <div className="centered text-white">S??ker du nya utmaningar?</div>
      </div>
      <div className="container">
        <h1 className="text-center my-5">Ans??kan</h1>
        <div className="mx-auto col col-md-8">
          Om du ??r intresserad av ett uppdrag hos Stracon ??r du v??lkommen att
          skicka in ditt CV och personliga brev h??r. Vi ser ??ver
          ans??kningar som kommit in med j??mna mellanrum, vi kontaktar dig
          f??r en profileringsintervju och informationsm??te. <br /> <br />
          D??refter f??r du besked om du l??ggs in i v??rt konsultarkiv och
          kvalificeras till en djupintervju. <br /> <br />
          N??r ett uppdrag kommer in som matchar din profil s?? kommer vi att h??ra
          av oss f??r ett eventuellt inledande m??te med kunden.
        </div>
        
        <div className="mx-auto col col-md-8 mt-5 bg-light p-5 rounded shadow-lg">
        {!formStatus ? (<form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name">Namn:*</label>
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
              <label htmlFor="email">Epost:*</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder=""
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className="mt-3">
              <label htmlFor="formFile" className="form-label">
                CV:*
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={setSelectedFile}
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="formFile" className="form-label">
                ??vriga dokument:
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                multiple="multiple"
                onChange={setOtherFiles}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="personligtbrev" className="form-label">
                Beskriv kortfattat varf??r du ??r intresserad av att jobba hos
                Stracon.*
              </label>
              <textarea
                className="form-control"
                id="personligtbrev"
                rows="4"
                name="message"
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
                          className="btn btn-outline-secondary"
                          data-bs-dismiss="modal"
                        >
                          St??ng
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
              <button type="submit" className="btn btn-outline-success mt-2">
                Skicka
              </button>
            )}
          </form>) : (<div className="thankyou"><span><h5>Tack f??r din ans??kan!</h5><br/>Vi h??r av oss inom kort</span></div>)}
          
        </div>
      </div>
    </div>
  );
}

export default Career;
