import React from "react";
import People from "../component/People.jsx";
import Vehicles from "../component/Vehicles.jsx";
import Planets from "../component/Planets.jsx";
import "../../styles/home.css";
import Header from "../component/Header.jsx";

export const Home = () => (
  <div className="container">
    <Header />
    <People />
    <Vehicles />
    <Planets />
  </div>
);
