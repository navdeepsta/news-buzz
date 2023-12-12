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
      `https://gnews.io/api/v4/top-headlines?category=${category}&country=${source}&apikey=${NEWS_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        setHeadlines(response.articles);
      })
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className="source-container">
        <h3>{countries.find(country=>country.code === source).name}</h3>
        { headlines?.length > 0 ? (
            headlines.map(
              (headline) =>
                headline.image && (
                  <div className="source" key={headline.title  + source}>
                    <img src={headline.image} />
                    <p>{headline.title}</p>
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
