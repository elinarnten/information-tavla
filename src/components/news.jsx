import { useEffect, useState } from "react";
import Parser from "rss-parser";

function News() {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const parser = new Parser();

    parser
      .parseURL("https://feeds.expressen.se/nyheter/")
      .then((result) => {
        setFeed(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!feed) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{feed.title}</h1>
      <ul>
        {feed.items.map((item) => (
          <li key={item.guid}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
