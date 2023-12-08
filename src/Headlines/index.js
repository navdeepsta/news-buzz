import React from "react";
import Headline from "../Headline";

export default function headlines( {headlines} ) {
  return (
    <>
      {headlines?.length > 0 ? (
        headlines.map(
          (headline) =>
            headline.author && (
              <Headline
                key={headline.author + headline.title}
                headline={headline}
              />
            )
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
