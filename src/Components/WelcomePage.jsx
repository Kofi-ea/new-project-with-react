import React from "react";
import { FaSearch } from "react-icons/fa";

const WelcomePage = (props) => {
  return (
    <div className="welcome-msg">
      <div className="welcome-page-search-box">
        <input
          type="text"
          placeholder="Search country here"
          onChange={props.myInput}
          onKeyDown={props.keyPress}
        />
        {}
        <button className="welcome-page-search-button">
          <FaSearch
            className="welcome-page-search-icon"
            onClick={props.thing}
          />
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
