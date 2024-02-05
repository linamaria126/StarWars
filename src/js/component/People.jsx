import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const People = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="text-white py-4">People</h1>
      <div className="my-carrousel">
        {store.viewPeople.map((item) => {
          return (
            <div className="card p-3 bg-dark cardCharacters" key={item.uid}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-white">
                  {item.properties.name}
                </h5>
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to={`/details/people/${item.uid}`}
                    className="btn btn-secondary"
                  >
                    See More...
                  </Link>
                  <button
                    className="border border-1 rounded-3 btn-sm btn btn-outline-warning"
                    onClick={() => actions.addFavorites(item)}
                  >
                    <i className="fa-regular fa-heart fs-3 text-warning m-0 bg-dark"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default People;
