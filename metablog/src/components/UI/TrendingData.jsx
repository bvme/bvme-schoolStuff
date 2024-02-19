import { useState, useEffect } from "react";
export function TrendingData() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=4");
      const data = await res.json();
      setArticles(data);
      setFilteredArray(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex gap-10 justify-center items">
      {filteredArray.map((article) => {
        return (
          <button
            className="flex flex-col-reverse items-center pb-9 px-3"
            style={{
              backgroundImage: `url(${article.cover_image})`,
              backgroundRepeat: `no-repeat`,
              borderRadius: `20px`,
              width: `100%`,
              height: `400px`,
            }}
          >
            <button className="flex bg-white rounded">{article.title}</button>
          </button>
        );
      })}
    </div>
  );
}
