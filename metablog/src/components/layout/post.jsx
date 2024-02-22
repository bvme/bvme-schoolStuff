import { PostData } from "../UI/PostData";

export const Post = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[300px] max-[1200px]:px-[200px] max-[1000px]:px-[100px] max-[800]:px-[50px]">
      <div className="flex flex-col w-full">
        <div className=" font-bold ">All Blog Post</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 ">
            <button className="hover:text-orange-500">All</button>
            <button className="hover:text-orange-500">Design</button>
            <button className="hover:text-orange-500">Travel</button>
            <button className="hover:text-orange-500">Fashion</button>
            <button className="hover:text-orange-500">Technology</button>
            <button className="hover:text-orange-500 ">Branding</button>
          </div>
          <button className="hover:text-orange-500">View All</button>
        </div>
      </div>
      <PostData/>
    </div>
  );
};
