import Background from "../assets/background.jpg";
import Logo from "../assets/Company_Logo_white-transparent.png";
import Wifi from "../assets/wifiIcon.png";
import "./welcome.css";

function Welcome() {
  return (
    <div className="container">
      <header className="header">
        <p className="headerText">Välkommen till </p>
        <p className="headerText">
          <strong>Testscouts!</strong>
        </p>
      </header>
      <div className="content">
        <div className="leftContainer">
          <img src={Background} className="background" alt="background" />
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <div className="rightContainer">
          <img src={Wifi} className="wifi" alt="wifiIcon" />
        </div>
      </div>
    </div>
  );
}
export default Welcome;
