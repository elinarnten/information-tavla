import Background from "../assets/background.jpg";
import Logo from "../assets/Company_Logo_white-transparent.png";
import Wifi from "../assets/wifiIcon.png";
import "./welcome.css";
import Clock from "react-live-clock";
import { useEffect, useState } from "react";

function Welcome() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  });

  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return (
    <div className="container">
      <header className="header">
        <p className="headerText">
          Välkommen till <strong>Testscouts!</strong>
        </p>
        <div className="timeDate">
          <p>{time.toLocaleTimeString()}</p>
          <p>
            {date}-{month}/{year}
          </p>
        </div>
      </header>
      <div className="content">
        <div className="leftContainer">
          <img src={Background} className="background" alt="background" />
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <div className="rightContainer">
          <img src={Wifi} className="wifi" alt="wifiIcon" />
          <div className="rCText">
            <p style={{ fontSize: "3rem" }}>WiFi</p>
            <p>QUALITYMINDS</p>
            <p>test1234</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
