import employeeData from "./employeeData.json";
import "./birthdays.css";
import BirthdayCake from "../assets/birthdayCakeVector.png";
import Confetti from "react-confetti";

function Birthdays() {
  const d = new Date().toISOString();
  console.log(d);

  const today = d.slice(5, 10);
  console.log(today);

  let foundBirthday = false;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(#e66465, #9198e5)",
        height: "100%",
      }}
    >
      <Confetti style={{ position: "unset" }} />

      {employeeData.employeeData.map((employeeData) => {
        if (employeeData.bDay === today) {
          foundBirthday = true;
          return (
            <div className="congratContainer">
              <div className="congratText">
                <h1>Grattis på födelsedagen</h1>
                <h1>{employeeData.name}!</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={BirthdayCake}
                    alt=""
                    style={{
                      height: "20rem",
                      width: "20rem",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      {foundBirthday ? null : (
        <div style={{ position: "absolute" }}>
          <h1 style={{ color: "white" }}>Birthday loading...</h1>
        </div>
      )}
    </div>
  );
}
export default Birthdays;
