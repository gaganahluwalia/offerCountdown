import "./App.css";
import { useEffect, useState } from "react";
import CountdownTimer from "./Components/CountdownTimer";

function App() {
  const [offer, setOffer] = useState({});
  const [countDownTimestampMs, setCountDownTimestampMs] = useState(0);
  const currentTime = Date.now();
  const fileName = "./assets/data.json";

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`${fileName}`);
      let data = await response.json();
      setOffer(data.offer);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (offer?.id) {
      const countDown = localStorage.getItem(offer.id);
      if (countDown && countDown !== null && countDown !== undefined) {
        setCountDownTimestampMs(countDown);
      } else {
        let countDown = currentTime + offer.time * 60000;
        localStorage.setItem(offer.id, Number(countDown));
        setCountDownTimestampMs(countDown);
      }
    }
  }, [offer]);

  return (
    <div className="App">
      <div class="header-image"></div>
      <CountdownTimer
        countdownTimestampMs={countDownTimestampMs}
        offer={offer}
      />
    </div>
  );
}

export default App;
