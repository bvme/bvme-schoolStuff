import { TrendingData } from "../UI/TrendingData";
export const Trending = () => {
  return (
    <div className=" flex flex-col px-[300px] gap-3">
      <div className="font-bold">Trending</div>
      <TrendingData />
    </div>
  );
};
