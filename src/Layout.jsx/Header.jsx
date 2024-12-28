import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = (props) => {
  return (
    <>
      <div className="Header">
        <h2>Around The World</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search country here"
            value={props.entryInput}
            onChange={props.myInput}
            onKeyDown={props.keyPress}
          />
          <button className="search-button">
            <FaSearch className="search-icon" onClick={props.thing} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
