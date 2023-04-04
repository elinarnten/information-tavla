// import { useEffect, useState } from "react";
import employeeData from "./employeeData.json";

function Birthdays() {
  const d = new Date().toISOString();
  console.log(d);

  const today = d.slice(5, 10);
  console.log(today);

  return (
    <div>
      {employeeData.employeeData.map((employeeData) => (
        <div>
          {employeeData.bDay === today ? (
            <p>Grattis! {employeeData.name} </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
export default Birthdays;
