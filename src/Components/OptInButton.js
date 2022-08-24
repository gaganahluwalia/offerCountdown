import React from "react";
import "../Styles/OptInButton.css";

const OptInButton = ({ offerValid, url }) => {
  const openURL = () => {
    window.open(url, "_blank");
  };
  return (
    <>
      {offerValid && (
        <button className="optInButton-button" onClick={openURL}>
          Opt In
        </button>
      )}
    </>
  );
};

export default OptInButton;
