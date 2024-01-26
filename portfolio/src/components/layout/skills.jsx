import { Icons } from "@/components/ui/iconData";
import { LoopedIcons } from "../ui/LoopedIcon";
export const Skills = () => {
  return (
    <div className="px-[80px] py-[96px]">
      <div className=" flex flex-col gap-[48px] px-[32px]">
        <div className="flex flex-col gap-[16px] items-center">
          <div className=" bg-gray-300 rounded-xl w-fit dark:bg-gray-600">
            <div className="px-[20px] py-[4px]">Skills</div>
          </div>
          <div>The skills, tools and technologies I am really good at:</div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-[200px] gap-y-[40px]">
          <LoopedIcons Icondata={Icons} />
        </div>
      </div>
    </div>
  );
};
