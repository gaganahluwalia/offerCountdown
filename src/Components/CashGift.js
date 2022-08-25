import React from "react";

const CashGift = ({ offerValid, cashGift }) => {
  return <>{offerValid && <span>Get your free £{cashGift} now</span>}</>;
};

export default CashGift;
