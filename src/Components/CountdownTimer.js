import { useState, useEffect } from "react";
import "../Styles/CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "../Utils/CountdownTimerUtils";
import CountdownUnit from "./CountdownUnit";
import CashGift from "./CashGift";
import OptInButton from "./OptInButton";
import headerImage1x from "../Images/top_image_scale_1x.png";
import headerImage2x from "../Images/top_image_scale_2x.png";

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
        <div className="countdown-hero">
          {remainingTime.offerValid && (
            <img
              className="countdown-timer-header_image"
              src={headerImage1x}
              srcset={`${headerImage1x} 1x, ${headerImage2x} 2x`}
            />
          )}
          <CashGift
            offerValid={remainingTime.offerValid}
            cashGift={offer.cash}
          />
          <div className="countdown-timer">
            <CountdownUnit unit={remainingTime.hours} label="Hours" />
            <span className="countdown-timer-seperater">:</span>
            <CountdownUnit unit={remainingTime.minutes} label="Minutes" />
            <span className="countdown-timer-seperater">:</span>
            <CountdownUnit unit={remainingTime.seconds} label="Seconds" />
          </div>
          <OptInButton offerValid={remainingTime.offerValid} url={offer.url} />
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
