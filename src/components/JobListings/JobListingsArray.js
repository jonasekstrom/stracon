import React from "react";
import { useNavigate } from "react-router-dom";

function JobListingsArray({ listing, index }) {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6 mt-4 " key={index}>
      <div className="card bg-light h-100 rounded shadow-lg">
        <h5 className="card-title text-center pt-2">{listing.title} </h5>
        <div className="card-body d-flex justify-content-between">
          <div className="d-flex card-text text-md-left align-items-center">
            {listing.location}
          </div>
          <button
            className="cta align-self-end mt-auto d-inline"
            data-toggle="tooltip"
            data-placement="top"
            title="Läs mer"
            onClick={() => navigate(`/lediga-tjanster/${listing._id}`)}
          >
            <span>Läs mer</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobListingsArray;
