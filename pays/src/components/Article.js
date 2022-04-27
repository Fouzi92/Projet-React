import React from "react";

const Article = ({ article }) => {
  console.log(article);
  return (
    <div className="article">
      <div className="card-header">
        <h3>Article</h3>
      </div>
    </div>
  );
};

export default Article;
