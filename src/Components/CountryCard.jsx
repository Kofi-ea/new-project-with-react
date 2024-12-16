import React from "react";
import CountryDetails from "./CountryDetails";
import { useState } from "react";

const CountryCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [restrictScroll, setRestrictScroll] = useState(false);

  function scroll() {
    if (restrictScroll) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling (default behavior)
    }
  }

  function details() {
    setShowDetails(true);
    scroll();
  }

  function back() {
    setShowDetails(false);
  }

  return (
    <>
      <div className="country-card" onClick={details}>
        <img className="flags" src={props.flags} alt="" />
        <h2>{props.capital}</h2>
        <p>{props.name}</p>
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
