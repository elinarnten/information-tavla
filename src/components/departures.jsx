function Departures() {
  return (
    <div style={{ height: "" }}>
      <iframe
        style={{ width: "100%", height: "100vh" }}
        src="https://avgangstavla.vasttrafik.se/?source=vasttrafikse-depatureboardlinkgenerator&stopAreaGid=9021014007172000"
      ></iframe>
      {/* <iframe
        style={{ width: "100%", height: "100%" }}
        src="https://trafiken.nu/goteborg/#57.699784,11.980021,7?fullscreen"
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
    </div>
  );
}

export default Departures;
