import { PostData } from "../UI/PostData";

export const Post = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className=" font-bold ">All Blog Post</div>
        <div className="flex flex-row justify-between">
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
      <div>
        <PostData />
      </div>
    </div>
  );
};
