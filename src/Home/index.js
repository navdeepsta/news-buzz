import React, { useState, useEffect } from "react";
import Search from "../Search";
import Articles from "../Articles";
import Categories from "../Categories";
import { readingListDB } from "../ReadingListDB/ReadingListDB";

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [ readingList, setReadingList ] = useState(readingListDB.readFromReadingList());

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?language=en&category=general`, {
      headers: {
        "X-Api-Key": NEWS_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setArticles(response.articles);
      })
      .catch((error) => console.log(error));

  }, []);

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
      <p>ReadingList: {readingList.length} Articles</p>
      <h1>News Buzz</h1>
      <Search onSearch={handleSearch} />
      <Categories />
      <Articles articles={articles} onSetReadingList={(readingList)=>setReadingList(readingList)} />
    </div>
  );
}
