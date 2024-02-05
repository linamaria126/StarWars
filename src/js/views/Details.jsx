import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const Details = () => {
  const [item, setItem] = useState();
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (params.type == "people") {
      setItem(store.viewPeople.find((item) => item.uid == params.uid));
    } else if (params.type == "vehicle") {
      setItem(store.viewVehicles.find((item) => item.uid == params.uid));
    } else if (params.type == "planet") {
      setItem(store.viewPlanets.find((item) => item.uid == params.uid));
    }
  }, []);

  return (
    <>
      {params.type == "people" ? (
        <div className="container">
          <div className="bg-dark text-white mt-3">
            <h1>{item?.properties?.name}</h1>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-5 mx-auto">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                alt="People img"
                className="p-3"
              />
            </div>
            <div className="col-5 bg-dark d-flex flex-column justify-content-center pe-4 text-white me-5">
              <div className="bg-dark p-3">
                <h1>Character information:</h1>
              </div>
              <div className="bg-dark">
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Birth:</strong>
                  </p>
                  <p>{item?.properties?.birth_year}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Hair Color:</strong>
                  </p>
                  <p>{item?.properties?.hair_color}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Eyes Color:</strong>
                  </p>
                  <p>{item?.properties?.eye_color}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Skin color:</strong>
                  </p>
                  <p>{item?.properties?.skin_color}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Height:</strong>
                  </p>
                  <p>{item?.properties?.height} cms</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Weight:</strong>
                  </p>
                  <p>{item?.properties?.mass} kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : params.type == "vehicle" ? (
        <div className="container">
          <div className="bg-dark text-white">
            <h1>{item?.properties?.name}</h1>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-5 ms-0">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
                alt="vehicle-img"
                className="p-3"
              />
            </div>
            <div className="col-5 bg-dark d-flex flex-column justify-content-center px-4 text-white me-0">
              <div className="bg-dark p-3">
                <h3>Character information:</h3>
              </div>
              <div className="bg-dark">
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Vehicle class:</strong>
                  </p>
                  <p>{item?.properties?.vehicle_class}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Model:</strong>
                  </p>
                  <p>{item?.properties?.model}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Manufacturer:</strong>
                  </p>
                  <p>{item?.properties?.manufacturer}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Length:</strong>
                  </p>
                  <p>{item?.properties?.length} m</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Passagers:</strong>
                  </p>
                  <p>{item?.properties?.passengers}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mx-5">
                  <p>
                    <strong>Max. Atmosphering Speed:</strong>
                  </p>
                  <p>{item?.properties?.max_atmosphering_speed}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mx-5">
                <p>
                  <strong>Cargo Capacity:</strong>
                </p>
                <p>{item?.properties?.cargo_capacity}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        params.type == "planet" && (
          <div className="container">
            <div className="bg-dark text-white mt-3">
              <h1>{item?.properties?.name}</h1>
            </div>
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-5 mx-auto">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
                  alt="planet-img"
                  className="p-3"
                />
              </div>
              <div className="col-5 bg-dark d-flex flex-column justify-content-center px-4 text-white me-2">
                <div className="bg-dark p-3">
                  <h3>Character information:</h3>
                </div>
                <div className="bg-dark">
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Diameter:</strong>
                    </p>
                    <p>{item?.properties?.diameter} km</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Rotation Period:</strong>
                    </p>
                    <p>{item?.properties?.rotation_period}h</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Orbital Period:</strong>
                    </p>
                    <p>{item?.properties?.orbital_period} days</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Gravity:</strong>
                    </p>
                    <p>{item?.properties?.gravity} days</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Population:</strong>
                    </p>
                    <p>{item?.properties?.population} individuals</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Climate:</strong>
                    </p>
                    <p>{item?.properties?.climate}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Terrain:</strong>
                    </p>
                    <p>{item?.properties?.terrain}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5">
                    <p>
                      <strong>Surface Water:</strong>
                    </p>
                    <p>{item?.properties?.surface_water}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Details;
