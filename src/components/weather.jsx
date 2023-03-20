import { useEffect, useState } from "react";

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=57.71&longitude=11.97&hourly=temperature_2m&current_weather=true`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is a error wih status code ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>API Posts</h1>
      {loading && <div>One moment please</div>}
      {error && <div>{`Something went wrong ${error}`}</div>}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Weather;
