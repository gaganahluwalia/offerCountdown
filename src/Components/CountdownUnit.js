import React from "react";
import "../Styles/CountdownTimer.css";

const CountdownUnit = ({ unit, label }) => {
  return (
    <div className="countdown-item">
      <span>{unit}</span>
      <span className="countdown-item-unit">{label}</span>
    </div>
  );
};

export default CountdownUnit;
