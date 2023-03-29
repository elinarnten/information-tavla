import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Welcome from "./components/welcome";
// import Weather from "./components/weather";
import Employee from "./components/employee";
// import News from "./components/news";
import Departures from "./components/departures";
import NewEmployee from "./components/newEmployee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Welcome />
    {/* <Weather /> */}
    <Employee />
    {/* <News /> */}
    <Departures />
    <NewEmployee />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
