import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import SourceDB from "../SourceDB/Countries.json";
import "./Source.css";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const countries = SourceDB.countries;

export default function Source() {
  const [ headlines, setHeadlines ] = useState([]);
  const { category, source } = useParams();  
  
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=${source}`,
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
  }, [])

  return (
    <div>
        <h3>{countries.find(country=>country.code === source).name}</h3>
        { headlines?.length > 0 ? (
            headlines.map(
              (headline) =>
                headline.author && (
                  <div className="source" key={headline.title + headline.author + source}>
                    <p>{headline.title}</p>
                    <p>{headline.author}</p>
                    <p>{headline.description}</p>
                    <a href={headline.url}>More</a>
                  </div>
                )
            )
          ) : (
            <p>Loading...</p>
          )}
    </div>
  )
}
