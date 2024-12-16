import React from "react";
import Header from "../../Layout.jsx/Header";
import { Link } from "react-router-dom";

const InfoPage = () => {
  return (
    <>
      <div className="info-page">
        <Header />
        <Link to={"/"}>
          <button>Back</button>
        </Link>

        <h1>Info-Page</h1>
      </div>
    </>
  );
};

export default InfoPage;
