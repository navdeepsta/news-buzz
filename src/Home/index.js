import React, { useState, useEffect } from "react";
import Search from "../Search";
import Articles from "../Articles";
import Categories from "../Categories";
import { readingListDB } from "../ReadingListDB/ReadingListDB";
import { Link } from "react-router-dom";
import { date } from "../Util/Util";
import Weather from "../Weather";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "./Home.css";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [readingList, setReadingList] = useState(
    readingListDB.readFromReadingList()
  );

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=${NEWS_API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        setArticles(response.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (searchTerm) => {
    fetch(`https://gnews.io/api/v4/search?q=${searchTerm}&apikey=${NEWS_API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        setArticles(response.articles);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="home-header">
        <div className="reading-list">
          <AutoStoriesIcon color="primary" />
          <Link to={`/readingList`} style={{ fontSize: "1.2em" }}>
            {readingList.length}{" "}
            {readingList.length > 1 ? "Articles" : "Article"}
          </Link>
        </div>
        <section className="header">
          <div className="date">{date.getDate()}</div>
          <div className="heading">
            <h1>Web Wire</h1>
          </div>
          <Weather />
        </section>
        <Search onSearch={handleSearch} />
        <Categories />
      </div>
      {articles.length ? (
        <Articles
          articles={articles}
          onSetReadingList={(readingList) => setReadingList(readingList)}
        />
      ) : (
        <span className="loading">Loading...</span>
      )}
    </div>
  );
}
