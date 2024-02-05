import { First, Second, Third } from "../UI/IntroImg";

export const Intro = () => {
  return (
    <div className="flex justify-center items-center pl-2 pb-2 w-[1000px] carousel">
      <First />
      <Second />
      <Third />
    </div>
  );
};
