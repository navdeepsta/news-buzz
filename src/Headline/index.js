import React from 'react';
import './Headline.css';

export default function Headline( props ) {
  const { author, title, description, urlToImage, url, publishedAt, source } = props.headline;

  return (
    <div className="headline">
        <img src={urlToImage} alt={title} />
        <p>{title}</p>
        <p>{author}</p>
        <p>{description}</p>
        <a href={url} target='_blank'>Read more</a>
    </div>
  )
}
