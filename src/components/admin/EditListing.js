import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect, useRef } from "react";
import {
  updateListing,
  getList,
  reset,
} from "../../features/listings/listingSlice";

function Editlisting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const isMounted = useRef(true);

  const [formData, setFormData] = useState({
    title: "",
    ingress: "",
    aboutCompany: "",
    scope: "",
    tasks: "",
    education: "",
    personalQualities: "",
    qualifications: "",
    languages: "",
    license: "",
    travels: "",
    location: "",
    merits: "",
    deadline: "2022-05-02",
    published: "false",
  });
  const { user } = useSelector((state) => state.auth);
  const { listing, isLoading, isError, message } = useSelector(
    (state) => state.listings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/admin");
    }

    dispatch(getList(params.joblistingId));

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, params, message, dispatch]);

  useEffect(() => {
    // Only if loading is false and still mounted
    
    if (isLoading === false && isMounted.current) {
      setFormData({
        title: listing.title,
        ingress: listing.ingress,
        aboutCompany: listing.aboutCompany,
        scope: listing.scope,
        tasks: listing.tasks.join(';'),
        education: listing.education,
        personalQualities: listing.personalQualities,
        qualifications: listing.qualifications,
        languages: listing.languages,
        license: listing.license,
        travels: listing.travels,
        merits: listing.merits,
        location: listing.location,
        deadline: new Date(listing.deadline).toLocaleDateString('sv-SE'),
        published: listing.published,
      });
    }
  }, [listing, isMounted, isLoading]);

  const onChange = (e) => {
    e.preventDefault();
   
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
 
  };
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      published: e.target.value,
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
      tasks: tasks.split(';'),
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
    const jobListingId = params.joblistingId

    const data = {
      userData,
      jobListingId
    }
      dispatch(updateListing(data));
    // add update dispatch
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
      published: "false",
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
    travels,
    location,
    deadline,
    merits,
    published,
  } = formData;
  return (
    <section className="container">
      <button className="btn btn-light" onClick={() => navigate(-1)}>
        G?? tillbaka
      </button>
      <br />
      <div className="row mx-auto justify-content-center">
      <div className="col-md-6">
      <h2 className="text-center">Redigera {title}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group mt-4">
          <label htmlFor="title">Titel</label>
          <input
            className="form-control"
            type="title"
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
            type="ingress"
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
            type="aboutCompany"
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
            type="tasks"
            name="tasks"
            id="tasks"
            value={tasks}
            placeholder="Hantera l??ner; ink??p; kundservice; osv"
            onChange={onChange}
            rows="5"
          ></textarea>
        </div>

        <div className="form-group mt-4">
          <label htmlFor="personalQualities">Din Erfarenhet</label>
          <textarea
            className="form-control"
            type="personalQualities"
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
            type="qualifications"
            name="qualifications"
            id="qualifications"
            value={qualifications}
            onChange={onChange}
            rows="4"
          ></textarea>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="education">Utbildningskrav/??vrigt</label>
          <input
            className="form-control"
            type="education"
            name="education"
            id="education"
            value={education}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="languages">Spr??kkrav/??vrigt</label>
          <input
            className="form-control"
            type="languages"
            name="languages"
            id="languages"
            value={languages}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="travels">Resekrav/??vrigt</label>
          <input
            className="form-control"
            type="travels"
            name="travels"
            id="travels"
            value={travels}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="license">Beh??righet eller annan kompetens</label>
          <input
            className="form-control"
            type="license"
            name="license"
            id="license"
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
            type="scope"
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
          <label htmlFor="deadline">Sista ans??kningsdag</label>
          <input
            className="form-control"
            type="date"
            name="deadline"
            id="deadline"
            value={deadline}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-4 text-center">
          <select value={published} onChange={handleChange}>
            <option value="true">Publicerad</option>
            <option value="false">Ej publicerad</option>
          </select>
        </div>

        <div className="form-group mt-4 text-center">
          <button className="btn btn-success btn-block" type="submit">
            Uppdatera jobbannons
          </button>
        </div>
      </form>
      </div>
      </div>
    </section>
  );
}

export default Editlisting;
