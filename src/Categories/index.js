import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

function Categories() {
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
