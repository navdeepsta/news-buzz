import React from "react";
import { Link } from "react-router-dom";

export default function Sources({ sources, category, onSetSource }) {
  return (
    <nav>
      <ul>
        {sources.map((source) => (
          <li key={source.id}>
            <Link
              to={`/category/${category}/source/${source.code}`}
              onClick={() => onSetSource(source.code)}
            >
              {source.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
