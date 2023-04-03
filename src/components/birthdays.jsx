import { employeeData } from "./employeeData.json";

export const Birthdays = () => {
  return (
    <div>
      {employeeData.map((employeeData) => {
        return (
          <div
            style={{
              backgroundColor: "yellow",
              margin: "2rem",
              padding: "1rem",
              width: "auto",
            }}
            key={employeeData.id}
          >
            <h2>
              {employeeData.name}: {employeeData.location}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
