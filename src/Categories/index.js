import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Categories.css";

const categories = ["Business", "Health", "Science", "Sports", "Technology", "Entertainment"];

function Categories() {
  return (
    <nav>
      <ul>
        <Box sx={{ flexGrow: 1 }} my={3} >
          <Grid container spacing={{ xs: 2, md: 1 }}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={2} lg={2} key={category}>
                <li key={category}>
                  <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
                </li>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ul>
    </nav>
  );
}

export default Categories;
