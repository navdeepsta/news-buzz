import React from "react";
import { readingListDB } from "../ReadingListDB/ReadingListDB";
import './Article.css';

const Article = (props) => {
  const { author, title, description, urlToImage, url, publishedAt, source } =
    props.article;

    const handleClick = () => {
       const newArticle = {id: `${title}${source.name}${publishedAt}`, ...props.article};
       const findArticle = readingListDB.readFromReadingList().find(article => article.id == newArticle.id);
       if(!findArticle) {
        readingListDB.saveToReadingList(newArticle);
        props.onSetReadingList(readingListDB.readFromReadingList());
       }
    }

  return (
    <article className="article-card">
       <button className="article-add" onClick={handleClick}>Add to Reading List</button>
      <img src={urlToImage} alt={title} className="article-image" />
      <div className="article-details">
        <h2 className="article-title">{title}</h2>
        <p className="article-author">By {author}</p>
        <p className="article-description">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link"
          aria-label={`Read more about ${title}`}
        >
          Read More
        </a>
        <p className="article-published-at">
          Published at {new Date(publishedAt).toLocaleString()}
        </p>
      </div>
    </article>
  );
};

export default Article;
