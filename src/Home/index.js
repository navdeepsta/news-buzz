import React, { useState } from "react";
import Search from "../Search";
import Articles from "../Articles";
import Categories from "../Categories";
import "./Home.css";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export default function Home() {
  const [articles, setArticles] = useState([]);

  const handleSearch = (searchTerm) => {
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}`, {
      headers: {
        "X-Api-Key": NEWS_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setArticles(response.articles);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>News Buzz</h1>
      <Search onSearch={handleSearch} />
      <Categories />
      <Articles articles={articles} />
    </div>
  );
}
