import React from "react";
import ChocoLogo from "../../assets/choco-logo.png";
import { searchIcon } from "../../assets";

import "./style.css";

const index = (props) => {
  return (
    <header className="header flex justify-sb">
      <div className="logo">
        <img src={ChocoLogo} alt="logo" style={{ width: "40px" }} />
      </div>
      <div>
        <img src={searchIcon} alt="Search" />
      </div>
    </header>
  );
};

export default index;
