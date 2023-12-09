import React from "react";
import Article from "../Article";
import "./Articles.css";

function Articles({ articles, onSetReadingList }) {
  return (
    <div className="articles">
      {articles.length > 0 &&
        articles.map(
          (article) =>
            article.urlToImage  && (
              <Article
                article={article}
                key={article.title + article.source.name + article.publishedAt}
                onSetReadingList={onSetReadingList}
              />
            )
        )}
    </div>
  );
}

export default Articles;
