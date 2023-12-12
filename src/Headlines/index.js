import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Headline from "../Headline";

export default function headlines({ headlines }) {
  return (
    <div className="headlines-container" style={{margin:"16px"}}>
      {headlines?.length > 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 2 }}>
            {headlines.map(
              (headline) =>
                headline.image && (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={headline.title + headline.publishedAt} >
                  <Headline
                    key={headline.title + headline.publishedAt}
                    headline={headline}
                  />
                  </Grid>
                )
            )}
          </Grid>
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
