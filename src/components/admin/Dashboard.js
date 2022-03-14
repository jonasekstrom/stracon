import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ListingItem from "./ListingItem";
import Spinner from "../../components/common/Spinner";
import { getListings, reset } from "../../features/listings/listingSlice";
import { logout, logoutReset } from "../../features/auth/authSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { listings, isLoading, isError, message } = useSelector(
    (state) => state.listings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/admin");
    }

    dispatch(getListings());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  const onLogout = () => {
    dispatch(logout());
    dispatch(logoutReset());
    navigate("/admin");
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="container">
        <div className="mx-auto col col-md-8 margin50">
          <h1 className="text-center">Välkommen {user && user.name}</h1>
          <div className="text-center">
            <button
              className="btn btn-warning m-3"
              onClick={() => navigate("/admin/dashboard/createJoblisting")}
            >
              Skapa Jobbannons
            </button>
            <button className="btn btn-danger" onClick={onLogout}>
              Logga ut
            </button>
          </div>
          <div className="mt-4"><h3 className="text-center">Jobbannonser</h3></div>
          
        </div>
      </section>

      <section className="container">
        {listings.length > 0 ? (
          <div className="text-center">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Upplagd</th>
                  <th scope="col">Ort</th>
                  <th scope="col">Titel</th>
                  <th scope="col">Publicerad</th>
                  <th scope="col">Deadline</th>

                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing, index) => (
                  <ListingItem
                    key={listing._id}
                    listing={listing}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-center">Du har inte skapat några annonser</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
