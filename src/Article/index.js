import React from "react";
import { readingListDB } from "../ReadingListDB/ReadingListDB";
import AddCardIcon from '@mui/icons-material/AddCard';
import './Article.css';

const Article = (props) => {
  const { title, description, image, url, publishedAt, source } =
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
      <div className="article-header">
        <span className="source-name">{source.name}</span>
        <span className="card-icon"><AddCardIcon onClick={handleClick} color="primary" /></span>
        <p className="article-published-at">
          {new Date(publishedAt).toLocaleString()}
        </p>
      </div>
      
      <img src={image} alt={title} className="article-image" />
      <div className="article-details">
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description.slice(0, 150)}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link"
          aria-label={`Read more about ${title}`}
        >
          ...more
        </a>
        </p>
      </div>
   
    </article>
  );
};

export default Article;
