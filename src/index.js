import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Weather from "./components/weather";
// import News from "./components/news";
import Carousel from "./components/carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Carousel />
    {/* <Weather /> */}
    {/* <News /> */}
  </React.StrictMode>
);

reportWebVitals();
