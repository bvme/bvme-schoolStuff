import { TrendingData } from "../UI/TrendingData";
export const Trending = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="font-bold px-[300px]">Trending</div>
      <TrendingData />
    </div>
  );
};
