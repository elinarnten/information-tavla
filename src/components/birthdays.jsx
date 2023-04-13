import employeeData from "./employeeData.json";
import "./birthdays.css";
import BirthdayCake from "../assets/birthdayCakeVector.png";
import Confetti from "react-confetti";

function Birthdays() {
  const d = new Date().toISOString();
  console.log(d);

  const today = d.slice(5, 10);
  console.log(today);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(#e66465, #9198e5)",
      }}
    >
      <Confetti style={{ position: "unset" }} />
      {employeeData.employeeData.map((employeeData) => (
        <div className="congratContainer">
          <div className="congratText">
            {employeeData.bDay === today ? (
              <div>
                <h1>Grattis på födelsedagen</h1>
                <h1>{employeeData.name}!</h1>
                <img
                  src={BirthdayCake}
                  alt=""
                  style={{ height: "20rem", width: "20rem" }}
                />
              </div>
            ) : (
              <div>
                <h1>Birthday Loading..</h1>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Birthdays;
