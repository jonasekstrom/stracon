import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/common/Spinner";
import {
  getPublishedListings,
  reset,
} from "../../features/listings/listingSlice";
import JobListingsArray from "./JobListingsArray";
import Joblisting from "../../img/bakgrunder/joblisting.jpg";
function JobListings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { listings, isLoading, isError, message } = useSelector(
    (state) => state.listings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getPublishedListings());

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="hero">
        <img src={Joblisting} alt="Eriksberg" />
        <div className="overlay"></div>
        <div className="centered text-white text-center">
          Lediga tjänster
        </div>
      </div>

      <section className="container margin50">
        {listings.length > 0 ? (
          <div class="row">
            {listings.map((listing, index) => (
              <JobListingsArray
                key={listing._id}
                listing={listing}
                index={index}
              />
            ))}
          </div>
        ) : (
          <h3 className="text-center">
            Det finns inga lediga tjänster tillgängliga för tillfället
          </h3>
        )}
      </section>
    </>
  );
}

export default JobListings;
