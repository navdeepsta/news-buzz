import React, { useState } from "react";
import { Link } from "react-router-dom";
import { readingListDB } from "../ReadingListDB/ReadingListDB";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./ReadingList.css";

export default function ReadingList() {
  const [readingList, setReaadingList] = useState(
    readingListDB.readFromReadingList()
  );

  const handleRemove = (...articlesToRemove) => {
    readingListDB.removeFromReadingList(articlesToRemove);
    setReaadingList(readingListDB.readFromReadingList());
  };

  return (
    <> 
      <section className="readinglist-header">
      <Link to={`/`}>Home</Link>
        <Typography variant="h4" component="h6">Reading List</Typography>
        <Typography variant="subtitle1">{readingList.length} {readingList.length > 1 ? "Articles" : "Article"}</Typography>
        <Button variant="outlined" size="small" color="error" onClick={() => handleRemove(...readingList)}>
          Remove All
        </Button>
      </section> 
      <div className="container">
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={{ xs: 2, md: 2 }}>
            {readingList.map((article) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={article.id} >
                <Box display="flex" justifyContent="center">
                <div key={article.id} className="card">
                  <div className="article-header">
                    <span className="source-name">{article.source.name}</span>
                    <span className="card-icon">
                      {
                        <DeleteForeverIcon
                          onClick={() => handleRemove(article)} color="error"
                        />
                      }
                    </span>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link"
                    aria-label={`Read more about ${article.title}`}
                  >
                   <img src={article.image} />
                   <p>{article.title.slice(0, 200)}</p>
                  </a>
                </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
