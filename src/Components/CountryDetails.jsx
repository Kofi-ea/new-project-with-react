import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const CountryDetails = (props) => {
  return (
    <div className="details">
      <button className="modal-btn" onClick={props.close}>
        <FaArrowLeft className="arrow" />
      </button>

      <div className="First-section">
        <p className="title">{props.name}</p>
        <img className="details-flag" src={props.flags} alt="" />
        <p className="flag-description">{props.flagDescription}</p>
      </div>

      <div className="More-Info">
        <div className="Second-section">
          <p>
            {" "}
            <strong>Capital : </strong>
            {props.city}
          </p>
          <p>
            <strong>Other Names : </strong>
            {!props.otherName ? "N/A" : [props.otherName]}
          </p>
          <p>
            {" "}
            <strong>Continent : </strong>
            {props.continent}
          </p>

          <p>
            {" "}
            <strong>Region : </strong>
            {props.region}
          </p>
        </div>
        <div className="Third-section">
          <p>
            {" "}
            <strong>Population : </strong>
            {props.population}
          </p>
          <p>
            {" "}
            <strong>Sub-Region : </strong>
            {props.subRegion}
          </p>
          <p>
            {" "}
            <strong>TimeZone : </strong>
            {props.timezone}
          </p>
          {/* <input type="checkbox" name="" id="" value={props.Independent} />
          <input type="checkbox" name="" id="" value={props.lanlocked} /> */}
          <p>
            {" "}
            <strong>Area : </strong>
            {props.area}sq ft
          </p>
        </div>
      </div>
      <div className="Fourth-section">
        <a href={props.googleMap} target="_blank">
          <p>GOOGLE MAP LINK</p>
        </a>

        <a href={props.streetMap} target="_blank">
          <p>OPEN STREET MAP LINK</p>
        </a>
      </div>
    </div>
  );
};

export default CountryDetails;
