import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Headline from "../Headline";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
function Category() {
  const [headlines, setHeadlines] = useState("");
  const { category } = useParams();

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&language=en`,
      {
        headers: {
          "X-Api-Key": NEWS_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setHeadlines(response.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Link to={`/`}>Home</Link>
      <h1>{category} News</h1>
      {headlines.length > 0 ? (
        headlines.map(
          (headline) =>
            headline.author && (
              <Headline
                key={headline.author + headline.title}
                headline={headline}
              />
            )
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Category;
