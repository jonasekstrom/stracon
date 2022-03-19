import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { getPublishedListing, reset } from "../../features/listings/listingSlice";
import recruiter from "../../img/team/patrik.jpg";

function JobListing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const isMounted = useRef(true);

  const [file, setFile] = useState("");
  const [otherDocuments, setOtherDocuments] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    message: "",
    cv: "",
    cvFileName: "",
    other: "",
    text: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    ingress: "",
    aboutCompany: "",
    scope: "",
    tasks: [],
    education: "",
    personalQualities: "",
    qualifications: "",
    languages: "",
    license: "",
    travels: "",
    merits: "",
    location: "",
    deadline: "",
    published: false,
  });
    const { listing, isLoading, isError, message } = useSelector(
    (state) => state.listings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
      navigate("/jobs")
    }
    dispatch(getPublishedListing(params.id));
    window.scrollTo(0, 0)

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, params, message, dispatch]);

  useEffect(() => {
    // Only if loading is false and still mounted
    if (isLoading === false && isMounted.current) {
      setFormData({
        title: listing.title,
        ingress: listing.ingress,
        aboutCompany: listing.aboutCompany,
        scope: listing.scope,
        tasks: listing.tasks,
        education: listing.education,
        personalQualities: listing.personalQualities,
        qualifications: listing.qualifications,
        languages: listing.languages,
        license: listing.license,
        travels: listing.travels,
        location: listing.location,
        merits: listing.merits,
        deadline: listing.deadline,
        published: listing.published,
      });
    }
  }, [listing, isMounted, isLoading]);
  const [human, setHuman] = useState(false);
  const onChange = (e) => {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
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
  const printPart = () => {
    var printwin = window.open("");
    printwin.document.write(document.getElementById("toprint").innerHTML);
    printwin.stop();
    printwin.print();
    printwin.close();
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    const newData = new FormData();
    newData.append("title", formData.title);
    newData.append("location", formData.location);
    newData.append("file", file);
    newData.append("name", cvData.name);
    newData.append("email", cvData.email);
    newData.append("message", cvData.message);
    for (var i = 0; i < otherDocuments.length; i++) {
      newData.append(otherDocuments[i].name, otherDocuments[i]);
    }

    if (human) {
      try {
        const res = await axios.post(
          "https://www.stracon.se/api/send_application",
          newData,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "multipart/form-data",
            },
          }
        );

        let { message } = res.data;
        if (message === "complete") {
          setFormStatus(true);
          setTimeout(function () {
            setFormStatus(false);
            document.getElementById('closeModal').click();
          }, 5000);
          setCvData({
            name: "",
            email: "",
            message: "",
            cv: "",
            cvFileName: "",
            other: "",
            text: "",
          });
          setHuman();
          setFile("");
          setOtherDocuments("");
        }
      } catch (err) {}
    }
  };
  const {
    title,
    ingress,
    aboutCompany,
    scope,
    tasks,
    education,
    personalQualities,
    qualifications,
    languages,
    license,
    travels,
    location,
    merits,
    deadline
  } = formData;

  return (
    <section className="container">
     <button
        className="btn hidden disabled"
      ><span className="invisible">Gå tillbaka</span></button>
    <button
        className="btn btn-secondary me-1 float-end"
        onClick={() => printPart()}
      >
       <i className="fas fa-print"></i>
      </button>
      <div className="row mx-auto justify-content-between">
        <div className="col-md-7"  id="toprint">
          <h1 className="text-center my-5">{title}</h1>
          <div className="mb-3">
            <span className="font-italic bold">{ingress}</span>
          </div>
          <p>{aboutCompany}</p>
          <div className="mb-3">
            <span className="d-inline">Omfattning: </span>
            <span className="d-inline">{scope}</span>
          </div>

          <p>Arbetsuppgifter:</p>
          <ul>
            {tasks.map((task, index) => {
              return <li key={index}>{task}</li>;
            })}
          </ul>
          {personalQualities !== "" ? <div className="mb-3">
            <div className="d-inline">Din Erfarenhet: </div>
            <div className="d-inline">{personalQualities}</div>
          </div>:<></>}
          {qualifications !== "" ? <div className="mb-4">
            <span className="d-inline">Om Dig: </span>
            <span className="d-inline">{qualifications}</span>
          </div>:<></>}
          {merits !== "" ? <p>{merits}</p>:<></>}
          {education !== "" ? <div className="mb-3">
            <span className="d-inline">{education}</span>
          </div>:<></>}
          {languages !== "" ? <p>{languages} </p> : <></>}
          {license !== "" ? <p>{license}</p>:<></>}
          {travels !== "" ? <div className="mb-3">
            <p>{travels}</p>
          </div>:<></>}
          
          {scope !== "" ? <div className="mb-3">
            <span className="d-inline">Omfattning: </span>
            <span className="d-inline">{scope}</span>
          </div>:<></>}
          {location !== "" ?<p>Ort: {location}</p>:<></>}
          <div className="mt-5">
            <p>
              Vi arbetar med löpande urval så tveka inte att skicka in din
              ansökan redan idag. För ytterligare frågor om tjänsten är du
              välkommen att kontakta ansvarig rekryteringskonsult Patrik
              Strandberg på telefonnummer{" "}
              <a
                href="tel:+46(0)709-666464"
                className=" text-decoration-none text-reset"
              >
                +46(0)709-66 64 64
              </a>
              .{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card my-5">
            <div className=" text-center">
              <img
                src={recruiter}
                alt="patrik strandberg vd"
                className="rounded-circle m-3 mx-auto"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="text-center">
              <div>
                Patrik Strandberg <br />
                Senior rekryteringskonsult
              </div>
              <div className="mt-2">
                <a
                  href="tel:+46(0)709-666464"
                  className=" text-decoration-none text-reset"
                >
                  <i className="fas fa-phone-square me-1"></i>+46(0)709-66 64 64
                </a>
                <br />
                <a
                  href="mailto:patrik@stracon.se"
                  className=" text-decoration-none text-reset"
                >
                  <i className="far fa-envelope fa me-1"> </i>
                  patrik@stracon.se
                </a>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text"></p>
              <div className="border-bottom text-center">
                  Sista ansökningsdag: {new Date(deadline).toLocaleDateString('sv-SE')}
                </div>
            </div>

            <div className="card-body text-center">
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#applicationModal"
              >
                Ansök nu
              </button>

              <div
                className="modal fade"
                id="applicationModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable">
                {!formStatus ?  <div className="modal-content">
                  
                    <div className="modal-header text-center">
                    <div></div>
                      <h5 className="modal-title" id="exampleModalLabel">
                        Ansökan för {title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={(e) => onSubmit(e)}>
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
                            Personligt brev / Övriga dokument:*
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            multiple="multiple"
                            onChange={setOtherFiles}
                            required
                          />
                        </div>

                        <div className="mt-3">
                          <label
                            htmlFor="personligtbrev"
                            className="form-label"
                          >
                            Beskriv kortfattat om varför du är rätt person för detta jobb.*
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
                              Jag har läst och accepterar Stracon Groups
                              <a
                                href="http://localhost:3000/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-reset ms-1"
                              >
                                integritetspolicy
                              </a>
                            </p>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                    {!human ?
                      <button className="btn btn-success disabled">
                        Skicka ansökan
                      </button>:<button className="btn btn-success" onClick={onSubmit}>
                        Skicka ansökan
                      </button>}
                      <button
                        type="button"
                        id="closeModal"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Stäng
                      </button>
                    </div>
                  </div>:<div className="modal-content"><div className="thankyou"><span><h5>Tack för din ansökan!</h5><br/>Vi hör av oss inom kort</span></div></div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListing;
