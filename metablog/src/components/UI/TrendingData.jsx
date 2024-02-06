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

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };

  return (
    <div className="flex">
      {filteredArray.map((article) => {
        return (
          <div className="">
            <img src={article.cover_image} alt="" />
            {article.title}
          </div>
        );
      })}
    </div>
  );
}
