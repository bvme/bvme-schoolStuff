import { useState, useEffect } from "react";
export function SinglePostData() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=1");
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
    <div className="flex gap-10 justify-center items-center">
      {filteredArray.map((article) => {
        return (
          <div className="flex flex-col gap-[20px]">
            <div className=" font-bold text-3xl">{article.title}</div>
            <img
              className=" drop-shadow-2xl rounded-xl"
              src={article.cover_image}
              alt=""
            />
            <div dangerouslySetInnerHTML={{ __html: article.body_html }}></div>
          </div>
        );
      })}
    </div>
  );
}
