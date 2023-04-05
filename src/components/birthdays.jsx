import employeeData from "./employeeData.json";
import Conffetti from "../assets/conffetti.png";
import "./birthdays.css";

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
      }}
    >
      <img
        src={Conffetti}
        alt="conffetti"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      {employeeData.employeeData.map((employeeData) => (
        <div className="congratContainer">
          <div className="congratText">
            {employeeData.bDay === today ? (
              <h1>Grattis på födelsedagen {employeeData.name}!</h1>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Birthdays;
