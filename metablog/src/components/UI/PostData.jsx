import { useState, useEffect } from "react";
import Link from "next/link";

export function PostData() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=9");
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
    <div>
      <div className="flex gap-3 flex-wrap">
        {filteredArray.map((article) => {
          return (
            <Link href={"singlepost"}>
              <button className="border-[2px] rounded-md m-3 h-fit w-[450px] p-[10px]">
                <img src={article.cover_image} alt="" />
                <div>{article.title}</div>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
