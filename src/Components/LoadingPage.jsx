import React from "react";
import { ClipLoader } from "react-spinners/ClipLoader";

const LoadingPage = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <div>
        <div className="loading-page">
          LOading...PLease Wait{" "}
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
