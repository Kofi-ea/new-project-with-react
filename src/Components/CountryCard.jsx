import React from "react";
import CountryDetails from "./CountryDetails";
import { useState } from "react";

const CountryCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [restrictScroll, setRestrictScroll] = useState(false);

  function scroll() {
    if (restrictScroll) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  }

  // else {
  //   document.body.style.overflow = "";
  // }

  function details() {
    setShowDetails(true);

    document.body.style.overflow = "hidden"; // Disable scrolling
  }

  function back() {
    setShowDetails(false);

    document.body.style.overflow = "";
  }

  return (
    <>
      <div className="country-card" onClick={details}>
        <img className="flags" src={props.flags} alt="" />
        <div className="summary-info">
          <h2 style={{ marginBottom: "15px" }}>{props.name}</h2>
          <p style={{ marginBottom: "8px" }}>
            {" "}
            <strong style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
              Capital :{" "}
            </strong>
            {props.capital}
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
              Region :{" "}
            </strong>
            {props.region}
          </p>
          <p>
            <strong style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
              Population of :{" "}
            </strong>
            {props.pop}
          </p>
        </div>
      </div>

      {showDetails && (
        <CountryDetails
          close={back}
          flags={props.flags}
          capital={props.capital}
          flagDescription={props.description}
          name={props.name}
          area={props.land}
          otherName={props.altName}
          continent={props.continent}
          Independent={props.independent}
          Landlocked={props.landlocked}
          population={props.pop}
          region={props.region}
          subRegion={props.subRegion}
          timezone={props.timezone}
          city={props.capital}
          googleMap={props.google}
          streetMap={props.street}
        />
      )}
    </>
  );
};

export default CountryCard;
