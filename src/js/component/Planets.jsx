import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 className="text-white py-4">Planets</h1>
      <div className="my-carrousel">
        {store.viewPlanets.map((item) => {
          const imagenUrl =
            "https://www.nationalgeographic.com.es/medio/2022/08/01/el-planeta-tierra_19950d74_1280x1280.jpg";
          return (
            <div className="card p-3 bg-dark cardCharacters" key={item.uid}>
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                className="card-img-top"
                alt="Imagen Planet"
                onError={(e) => {
                  e.target.src = imagenUrl;
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-white h-50">
                  {item.properties.name}
                </h5>

                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to={`/details/planet/${item.uid}`}
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
export default Planets;
