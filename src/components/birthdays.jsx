import employeeData from "./employeeData.json";

export const Birthdays = () => {
  return (
    <div>
      {employeeData.employeeData.map((employeeData) => {
        return <div></div>;
      })}
    </div>
  );
};
