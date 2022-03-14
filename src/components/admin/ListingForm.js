import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { createListing } from "../../features/listings/listingSlice";

function ListingForm() {
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
    location: "",
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
      published,
    } = formData;

    const userData = {
      title,
      ingress,
      aboutCompany,
      scope,
      tasks: tasks.split(","),
      education,
      personalQualities,
      qualifications,
      languages,
      license,
      travels,
      location,
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
      location: "",
      deadline: "",
      published: "",
    });
    navigate("/admin/dashboard/");
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
    travels,
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
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="ingress">Inledande text</label>
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
          <label htmlFor="aboutCompany">Om företaget</label>
          <textarea
            className="form-control"
            type="text"
            name="aboutCompany"
            id="aboutCompany"
            value={aboutCompany}
            onChange={onChange}
            rows="4"
            required
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
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="tasks">Arbetsuppgifter</label>
          <input
            className="form-control"
            type="text"
            name="tasks"
            id="tasks"
            value={tasks}
            placeholder="Hantera löner, inköp, kundservice, osv"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="education">Utbildningskrav</label>
          <input
            className="form-control"
            type="text"
            name="education"
            id="education"
            value={education}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="personalQualities">Personliga egenskaper</label>
          <textarea
            className="form-control"
            type="text"
            name="personalQualities"
            id="personalQualities"
            value={personalQualities}
            onChange={onChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="qualifications">Kvalifikationer</label>
          <textarea
            className="form-control"
            type="text"
            name="qualifications"
            id="qualifications"
            value={qualifications}
            onChange={onChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="languages">Språkkrav eller annat</label>
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
          <label htmlFor="travels">Resekrav eller annat</label>
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
          <label htmlFor="location">Ort</label>
          <input
            className="form-control"
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={onChange}
            required
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
            required
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="published">Publiserad</label>
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
        </div>
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
