import React from "react";
import Box from "@mui/material/Box";
import "./Headline.css";

export default function Headline(props) {
  const { title, image, url, source } = props.headline;

  return (
    <Box display="flex" justifyContent="center">
      <div className="headline-card">
        <p>{source.name}</p>
        <img src={image} alt={title} />
        <p>{title}</p>
        <a href={url} target="_blank">
          Read more
        </a>
      </div>
    </Box>
  );
}
