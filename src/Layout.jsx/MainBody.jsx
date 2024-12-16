import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CountryCard from "../Components/CountryCard";
import WelcomePage from "../Components/WelcomePage";
import Header from "./Header";

const MainBody = () => {
  //https://restcountries.com/v3.1/all

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [isWelcome, setIsWelcome] = useState(true);
  const [error, setError] = useState(null, true);

  const fullLIst = async (name) => {
    try {
      const getData = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );

      if (!getData.ok) {
        if (getData.status === 404) {
          throw new Error("Resource not found (404)");
        } else {
          throw new Error("Something went wrong!");
        }
      }

      const receivedData = await getData.json();

      setCountries(receivedData);
      console.log(receivedData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fullLIst(setSearch);
  }, [search]);

  const allCountries = countries.map((nation) => {
    return (
      <CountryCard
        key={nation.name.official}
        capital={nation.capital}
        flags={nation.flags.png}
        name={nation.name.official}
        altName={nation.altSpellings[3]}
        description={nation.flags.alt}
        land={nation.area}
        continent={nation.continents}
        independent={nation.independent}
        landlocked={nation.landlocked}
        pop={nation.population}
        region={nation.region}
        subRegion={nation.subregion}
        timezone={nation.timezones}
        google={nation.maps.googleMaps}
        street={nation.maps.openStreetMaps}
      />
    );
  });
  function value() {
    search();
  }

  function onSearch(e) {
    setSearch(e.target.value);
  }

  function clickSearch() {
    fullLIst(search);
    setIsWelcome(false);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      clickSearch();
    }
  }

  return (
    <div className="Main-Body">
      <Header
        myInput={onSearch}
        thing={clickSearch}
        value={value}
        keyPress={handleKeyPress}
      />
      {isWelcome ? (
        <WelcomePage />
      ) : (
        <div className="container">{allCountries}</div>
      )}
    </div>
  );
};

export default MainBody;
