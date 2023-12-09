import React, { useState } from "react";
import { Link } from "react-router-dom";
import { readingListDB } from "../ReadingListDB/ReadingListDB";
import "./ReadingList.css";

export default function ReadingList() {
  const [readingList, setReaadingList] = useState(
    readingListDB.readFromReadingList()
  )

  return (
    <>
      <Link to={`/`}>Home</Link>
      <h1>Reading List</h1>
      <h5>{readingList.length} Articles</h5>
      {readingList.map((article) => (
        <div key={article.id} className="reading-list-card">
            <img src={article.urlToImage} style={{width:200, height:200}}/>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button>Remove from ReadingList</button>
        </div>
      ))}
    </>
  );
}
