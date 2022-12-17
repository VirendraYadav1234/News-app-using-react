import React from "react";
import "./News.css";

function In_news({ news }) {
  return (
    <div className="news-card">
    
      <img src={news.urlToImage} alt={news.title} />
      <h2>{news.description}</h2>
      <button onClick={()=>{window.open(news.url)}}>Read More</button>
    </div>
  );
}

export default In_news;
