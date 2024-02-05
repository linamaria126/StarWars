import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/Star-Wars-icon.jpg";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-black text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <Link
              className="nav-link active text-warning"
              aria-current="page"
              to="/"
            >
              <button className="border border-1 rounded-3 btn-sm btn btn-outline-warning W-100">
                <h4 className="px-3 pt-1">Home</h4>
              </button>
            </Link>
          </div>
          <div className="ps-5 ms-5">
            <img src={logo} alt="Logo-StarWars" />
          </div>
          <div></div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites: {store.favorites.length}
            </button>
            <ul className="dropdown-menu bg-warning dropdown-menu-end drop">
              {store.favorites.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>{item.properties.name}</h5>
                      <button
                        type="button"
                        className="text-primary_emphasis m-2 border border-0 bg-transparent btn btn-warning"
                        onClick={() => actions.deleteFavorites(index)}
                      >
                        <i className="fas fa-trash fs-4 p-1"></i>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
