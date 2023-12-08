import React from "react";
import Article from "../Article";
import "./Articles.css";

function Articles({ articles }) {
  return (
    <div className="articles">
      {articles.length > 0 &&
        articles.map(
          (article) =>
            article.author && (
              <Article
                article={article}
                key={article.title + article.source.name + article.publishedAt}
              />
            )
        )}
    </div>
  );
}

export default Articles;
