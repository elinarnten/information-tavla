function Employee() {
  const employee = [
    {
      id: 1,
      name: "Pierre Alenbrink",
      location: "Astra Zeneca",
    },
    {
      id: 2,
      name: "Veronica Jansson",
      location: "Volvo",
    },
    {
      id: 3,
      name: "Tobias Andblad",
      location: "Volvo",
    },
    {
      id: 4,
      name: "David Engvall",
      location: "Volvo",
    },
    {
      id: 5,
      name: "Mark Tennyson",
      location: "Husqvarna",
    },
    {
      id: 6,
      name: "Gisela Gutierrez Meza",
      location: "Saab",
    },
    {
      id: 7,
      name: "Hans Börjesson",
      location: "Saab",
    },
    {
      id: 8,
      name: "Daniel Nilsson",
      location: "Volvo",
    },
    {
      id: 9,
      name: "Tobias Gilbertsson",
      location: "Volvo",
    },
    {
      id: 10,
      name: "Jakob Nilsson",
      location: "Volvo",
    },
    {
      id: 11,
      name: "Emilia Moberg",
      location: "Salus Mea",
    },
    {
      id: 12,
      name: "Klaus Nohlås",
      location: "Testscouts HQ",
    },
    {
      id: 13,
      name: "Jakob Pettersson",
      location: "Volvo",
    },
    {
      id: 14,
      name: "Bengt Augustsson",
      location: "Volvo",
    },
    {
      id: 15,
      name: "Maria Celovska",
      location: "Volvo",
    },
    {
      id: 16,
      name: "Ruben Sandström",
      location: "Volvo",
    },
    {
      id: 17,
      name: "Karin Dahlberg",
      location: "Stamcellslabbet Sahlgrenska",
    },
    {
      id: 18,
      name: "Martin Drugge",
      location: "Ahlström",
    },
    {
      id: 19,
      name: "Mikael Engvall",
      location: "CEVT",
    },
    {
      id: 20,
      name: "Henrik Simpanen",
      location: "Husqvarna",
    },
    {
      id: 21,
      name: "Mattias Torstensson",
      location: "Husqvarna",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: " column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Scouter</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {employee.map((employee) => {
          return (
            <div
              style={{
                backgroundColor: "yellow",
                margin: "2rem",
                padding: "1rem",
                width: "auto",
              }}
              key={employee.id}
            >
              <h2>
                {employee.name}: {employee.location}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Employee;
