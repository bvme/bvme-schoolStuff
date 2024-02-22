import { IntroData } from "../UI/introData";

export const Intro = () => {
  return (
    <div className="flex items-center w-full px-[300px] max-[1200px]:px-[200px] max-[1000px]:px-[100px] max-[800]:px-[50px]">
      <div className=" flex flex-col gap-y-4 justify-center w-[100%]">
        <IntroData />
      </div>
    </div>
  );
};
