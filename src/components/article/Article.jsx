import React from 'react';
import './article.css';

const Article = ({imgUrl}) => {
  return (
    <div className="gpt__blog-container_article">
      <div className="gpt3__blog-container_article-img">
        <img src={imgUrl} alt="Blog Image" />
      </div>
    </div>
  )
}

export default Article
