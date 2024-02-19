import { PostData } from "../UI/PostData";

export const Post = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[300px]">
      <div className="flex flex-col w-full">
        <div className=" font-bold ">All Blog Post</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 ">
            <button>All</button>
            <button>Design</button>
            <button>Travel</button>
            <button>Fashion</button>
            <button>Technology</button>
            <button>Branding</button>
          </div>
          <button>View All</button>
        </div>
      </div>
      <div className=" w-full gap-40">
        <PostData />
      </div>
    </div>
  );
};
