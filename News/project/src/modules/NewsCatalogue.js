import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsElement from "./NewsElement";

const NewsCatalogue = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        setArticles(response.data);
        // Print the data
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    getArticles();
  }, []);

  return (
    <div>
      {articles.slice(5).map((article, index) => (
        <NewsElement
          key={index}
          title={article.title}
          description={article.summary}
          url={article.url}
          urlToImage={article.imageUrl}
        />
      ))}
    </div>
  );
};

export default NewsCatalogue;

