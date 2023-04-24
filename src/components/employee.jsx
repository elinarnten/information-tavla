import employeeData from "./employeeData.json";
function Employee() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: " column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whiteSmoke",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "xxx-large" }}>Scouter</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {employeeData.employeeData.map((employeeData) => {
          return (
            <div
              style={{
                backgroundColor: "#2b5d8b",
                margin: "2rem",
                padding: "1rem",
                width: "auto",
                color: "white",
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
    </div>
  );
}

export default Employee;
