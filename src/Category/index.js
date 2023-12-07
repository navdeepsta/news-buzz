import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sources from "../Sources";
import Headline from "../Headline";
import { Outlet } from "react-router-dom";
import SourceDB from "../SourceDB/Countries.json";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const countries = SourceDB.countries;

function Category() {

  const [headlines, setHeadlines] = useState([]);
  const [source, setSource] = useState();
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
      {source ? (
        <Link to={`/category/${category}`} onClick={() => setSource(null)}>
          Back
        </Link>
      ) : <Link to={`/`}>Home</Link>}
      <h1>{category} News</h1>
      {source ? (
        <Outlet />
      ) : (
        <>
            <Sources
              sources={countries}
              category={category}
              onSetSource={setSource}
            />
          {headlines?.length > 0 ? (
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
      )}
    </>
  );
}

export default Category;
