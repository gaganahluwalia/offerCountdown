import React from "react";
import "../Styles/CashGift.css";

const CashGift = ({ offerValid, cashGift }) => {
  return (
    <>
      {offerValid && (
        <span className="cashgift-message">Get your free £{cashGift} now</span>
      )}
    </>
  );
};

export default CashGift;
