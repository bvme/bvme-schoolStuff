import { PostData } from "../UI/PostData";

export const Post = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className=" font-bold ">All Blog Post</div>
        <div className="flex flex-row  w-[1000px] justify-between">
          <div className="flex flex-row">
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
      <div className=" w-[1000px] gap-40">
        <PostData />
      </div>
    </div>
  );
};
