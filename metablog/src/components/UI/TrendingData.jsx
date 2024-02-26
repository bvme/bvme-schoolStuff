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
    <div className="grid grid-cols-4 h-[250px] px-[300px] gap-5  max-[1200px]:px-[200px] max-[1000px]:grid-cols-2 max-lg:grid-cols-1">
      {filteredArray.map((article) => {
        return (
          <button
            className=" w-full bg-black hover:scale-105 transition ease-in-out delay-150 duration-300 active:opacity-50"
            style={{
              backgroundImage: `url(${article.cover_image})`,
              backgroundRepeat: `no-repeat`,
              borderRadius: `20px`,
            }}
          >
            <button className="flex rounded">{article.title}</button>
          </button>
        );
      })}
    </div>
  );
}
