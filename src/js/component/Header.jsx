import React from "react";
import banner from "../../img/banner.jpeg";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <img className="w-100" src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
