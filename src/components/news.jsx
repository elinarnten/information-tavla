import { useEffect, useState } from "react";

function News() {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://avgangstavla.vasttrafik.se/?source=vasttrafikse-depatureboardlinkgenerator&stopAreaGid=9021014007172000`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`This is a error wih status code ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        console.log(actualData);
        setFeed(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setFeed(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>One moment please</div>}
      {error && <div>{`Something went wrong ${error}`}</div>}
      <ul>{feed && <li key={feed.id}></li>}</ul>
      {/* <h1>{feed.title}</h1>
      <ul>
        {feed.items.map((item) => (
          <li key={item.guid}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default News;
