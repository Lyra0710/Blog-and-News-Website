import "./NewsElement.css";
import React from "react";

const NewsElement = ({ title, description, url, urlToImage }) => {
  return (
    <div className="newswebsite">
      <div className="newselement" onClick={() => window.location.href = url}>
        <img className="newsimage" src={urlToImage} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsElement;
