import { useState, useEffect } from "react";
import "../Styles/CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "../Utils/CountdownTimerUtils";
import CountdownUnit from "./CountdownUnit";
import CashGift from "./CashGift";
import OptInButton from "./OptInButton";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
  offerValid: false,
};

const CountdownTimer = ({ countdownTimestampMs, offer }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs, offer]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(Number(countdown)));
  }

  return (
    <>
      <div className="countdown-block">
        <CashGift offerValid={remainingTime.offerValid} cashGift={offer.cash} />
        <div className="countdown-timer">
          <CountdownUnit unit={remainingTime.hours} label="Hours" />
          <span>:</span>
          <CountdownUnit unit={remainingTime.minutes} label="Minutes" />
          <span>:</span>
          <CountdownUnit unit={remainingTime.seconds} label="Seconds" />
        </div>
        <OptInButton offerValid={remainingTime.offerValid} url={offer.url} />
      </div>
    </>
  );
};

export default CountdownTimer;
