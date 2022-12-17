import React, { useEffect, useRef, useState } from "react";
import In_news from "./In_news";
import "./News.css";

function News() {
  // const apikey = "50ee36928163410f9a97abc1df72ff7b";
  const apikey2="993c4512798241f7bed54682aa78c4a0";

  const [newlist, setnewlist] = useState([]);
  const [query, setquery] = useState("tesla");
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2022-11-10&sortBy=publishedAt&apiKey=${apikey2}`;
  const refrence = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setnewlist(data.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }
  function handlesubmit(event) {
    
    event.preventDefault();
    const queryvalue = refrence.current.value;
    setquery(queryvalue);
  }
  return (
    <div style={{ width: "80%", marginInline: "auto" }}>
      <h1 style={{ textAlign: "left", fontStyle: "italic", margin: "5px" }}>
        Today News
      </h1>
      <form onSubmit={handlesubmit}>
        <input
          className="input1"
          type="text"
          ref={refrence}
          placeholder="Enter what you want"
        />
        <input
          className="input2"
          onClick={handlesubmit}
          type="text"
          value="Submit"
        />
      </form>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,49%)",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {newlist.map((news) => {
          return <In_news news={news} />;
        })}
      </div>9
    </div>
  );
}

export default News;
