import React from "react";
import Article from "../Article";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Articles.css";

function Articles({ articles, onSetReadingList }) {
  return (
    <div className="articles">
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={{ xs: 2, md: 2 }}>
          {articles.length > 0 &&
            articles.map(
              (article) =>
                article.image && (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={
                    article.title +
                    article.source.name +
                    article.publishedAt
                  }>
                    <Article
                      article={article}
                      onSetReadingList={onSetReadingList}
                      type="add"
                    />
                  </Grid>
                )
            )}
        </Grid>
      </Box>
    </div>
  );
}

export default Articles;
