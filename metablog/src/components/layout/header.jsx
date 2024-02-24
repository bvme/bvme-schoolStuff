import Link from "next/link";

export const Header = () => {
  return (
    <div className="px-[300px] max-[1200px]:px-[200px] max-[1000px]:px-[100px] max-[800]:px-[50px]">
      <div className="flex justify-between py-[30px] items-center">
        <img className=" w-[100px]" src="_.png" alt="" />
        <div className="flex gap-[20px]">
          <Link href={"/"}>
            <button>Home</button>
          </Link>
          <Link href={"allpost"}>
            <button>Blog</button>
          </Link>
          <Link href={"contactpage"}>
            <button>Contact</button>
          </Link>
        </div>
        <input
          className="border-[1px] rounded-xl h-[30px]"
          type="text"
          placeholder="search.."
        />
      </div>
    </div>
  );
};
