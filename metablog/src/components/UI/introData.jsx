import {useState, useEffect} from "react";
export function IntroData(){
    const [articles, setArticles] = useState([]);
    const [filteredArray, setFilteredArray] = useState(articles)
    const fetchData = async () => {
        const res = await fetch ("https://dev.to/api/articles?per_page=4");
        const data = await res.json();
        setArticles(data);
        setFilteredArray(data);
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className=" flex carousel w-full mx-[20px]">
            {filteredArray.map((article) => {
                return (
                    <div className=" carousel-item w-full h-[400px] drop-shadow-2xl" style={{
                        backgroundImage: `url(${article.cover_image})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: `center`,
                    }}></div>
                )
            })}
        </div>
    )
}