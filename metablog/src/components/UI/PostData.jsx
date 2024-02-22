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
    <div className=" grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
      {filteredArray.map((article) => {
        return (
          <Link href={"singlepost"}>
            <button className=" border-[2px] rounded-md m-3 h-fit p-[10px] drop-shadow-2xl hover:scale-105 transition ease-in-out delay-150 duration-300 active:opacity-50">
              <img className="" src={article.cover_image} alt="" />
              <div>{article.title}</div>
            </button>
          </Link>
        );
      })}
    </div>
  );
}
