import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createListing } from "../../features/listings/listingSlice";

function ListingForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingress: "Stracon Group AB är ett företag som erbjuder rådgivningstjänster inom kunskapsområdet sälj och marknad, med uppdraget att verka tillsammans med och hjälpa företag med en trygg, balanserad och hållbar tillväxt. Våra kunder erbjuds också interima-bemanningstjänster där akuta vakanser eller tidsbestämda förstärkningar behövs, i vissa fall genomförs även rekryteringsuppdrag.",
    aboutCompany: "",
    scope: "",
    tasks: [],
    education: "",
    personalQualities: "",
    qualifications: "",
    languages: "",
    license: "",
    travels: "",
    location: "",
    merits: "",
    deadline: "",
    published: "false",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
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
      deadline,
      merits,
      published,
    } = formData;

    const userData = {
      title,
      ingress,
      aboutCompany,
      scope,
      tasks: tasks.split(";"),
      education,
      personalQualities,
      qualifications,
      languages,
      license,
      travels,
      location,
      merits,
      deadline,
      published,
    };

    dispatch(createListing(userData));
    setFormData({
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
      published: "",
    });
    navigate("/admin/dashboard/");
  };
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      published: e.target.value,
    }));
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
    location,
    deadline,
    merits,
    travels,
    published
  } = formData;
  return (
    <section className="container">
      <button className="btn btn-light" onClick={() => navigate('/admin/dashboard')}>
        Gå tillbaka
      </button>
      <br />
      <div className="row mx-auto justify-content-center">
      <div className="col-md-5">
      <h2 className="text-center">Skapa ny jobbannons</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group mt-4">
          <label htmlFor="title">Titel</label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={onChange}
            
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="ingress">Om Stracon</label>
          <textarea
            className="form-control"
            type="text"
            name="ingress"
            id="ingress"
            value={ingress}
            onChange={onChange}
            rows="4"
          ></textarea>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="aboutCompany">Om Kunden</label>
          <textarea
            className="form-control"
            type="text"
            name="aboutCompany"
            id="aboutCompany"
            value={aboutCompany}
            onChange={onChange}
            rows="4"
            
          ></textarea>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="tasks">Arbetsuppgifter</label>
          <textarea
            className="form-control"
            type="text"
            name="tasks"
            id="tasks"
            value={tasks}
            placeholder="Hantera löner; inköp; kundservice; osv"
            onChange={onChange}
            rows="5"
            
          ></textarea>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="personalQualities">Din Erfarenhet</label>
          <textarea
            className="form-control"
            type="text"
            name="personalQualities"
            id="personalQualities"
            value={personalQualities}
            onChange={onChange}
            rows="4"
            
          ></textarea>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="qualifications">Om Dig</label>
          <textarea
            className="form-control"
            type="text"
            name="qualifications"
            id="qualifications"
            value={qualifications}
            onChange={onChange}
            rows="4"
            
          ></textarea>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="education">Utbildningskrav/Övrigt</label>
          <input
            className="form-control"
            type="text"
            name="education"
            id="education"
            value={education}
            onChange={onChange}
            
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="languages">Språkkrav/Övrigt</label>
          <input
            className="form-control"
            type="text"
            name="languages"
            id="languages"
            value={languages}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="travels">Resekrav/Övrigt</label>
          <input
            className="form-control"
            type="text"
            name="travels"
            id="travels"
            placeholder="Resor: Massa goa tjänsteresor..."
            value={travels}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="license">Behörighet eller annan kompetens</label>
          <input
            className="form-control"
            type="text"
            name="license"
            id="license"
            placeholder="B-körkort är ett krav för denna tjänst..."
            value={license}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="merits">Meriterande</label>
          <textarea
            className="form-control"
            type="text"
            name="merits"
            id="merits"
            value={merits}
            onChange={onChange}
            rows="4"
            
          ></textarea>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="scope">Omfattning</label>
          <input
            className="form-control"
            type="text"
            name="scope"
            id="scope"
            value={scope}
            onChange={onChange}
            
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="location">Ort</label>
          <input
            className="form-control"
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={onChange}
            
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="deadline">Sista ansökningsdag</label>
          <input
            className="form-control"
            type="date"
            name="deadline"
            id="deadline"
            value={deadline}
            onChange={onChange}
            
          />
        </div>
        <div className="form-group mt-4">
        <label htmlFor="published">Publicerad</label>
          <select name="published" className="form-select" value={published} onChange={handleChange}>
            <option value="true">Publicerad</option>
            <option value="false">Ej publicerad</option>
          </select>
        </div>
{/*         <div className="form-group mt-4">
          <label htmlFor="published">Publicerad</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input m-1"
              type="radio"
              name="published"
              id="inlineRadio1"
              value={"true"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Ja
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="published"
              id="inlineRadio2"
              value={"false"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Nej
            </label>
          </div>
        </div> */}
        <div className="form-group mt-4 text-center">
          <button className="btn btn-success btn-block" type="submit">
            Lägg till jobbannons
          </button>
        </div>
      </form>
      </div>
      </div>
    </section>
  );
}

export default ListingForm;
