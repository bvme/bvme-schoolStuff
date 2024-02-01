import { First, Second, Third } from "../UI/introimg";
import { carousel } from "flowbite ";

export const Intro = () => {
  return (
    <div className="flex justify-center items-center px-[300px]" id=" default-carousel " data-carousel="slide">
      <First />
      <Second />
      <Third />
    </div>
  );
};
