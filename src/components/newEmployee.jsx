import "./newEmployee.css";
import Conffetti from "../assets/conffetti.png";
import ClappingHands from "../assets/clappingHands.gif";

function NewEmployee() {
  return (
    <div className="empContainer">
      <div className="left">
        <img src={Conffetti} alt="" style={{ objectFit: "cover" }} />
        <div className="welcomeTextContainer">
          <div className="welcomeText">
            <h2>Varmt välkommen</h2>
            <h2>till vårt team!</h2>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="profileContainer">
          <img
            src="https://api.lorem.space/image/face?w=250&h=250"
            alt="profileIMG"
            style={{ borderRadius: "50%", border: "solid white 2px" }}
          />
          <h2>Lorem Ipsum</h2>
        </div>
        <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
          <img
            src={ClappingHands}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewEmployee;
