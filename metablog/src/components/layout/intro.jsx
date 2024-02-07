import { First, Second, Third } from "../UI/IntroImg";

export const Intro = () => {
  return (
    <div className="flex items-center w-full">
      <div className=" flex flex-col gap-y-4 ml-[200px] justify-center w-[70%]">
        <div className="w-[100%] carousel ">
          <First />
          <Second />
          <Third />
        </div>
        <div className="flex justify-center">
          <button className="border h-fit rounded-md">
            <img className=" w-8 mx-4 my-2 " src="left-arrow.png" alt="" />
          </button>
          <button className="border h-fit rounded-md">
            <img className=" w-8 mx-4 my-2" src="right-arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
