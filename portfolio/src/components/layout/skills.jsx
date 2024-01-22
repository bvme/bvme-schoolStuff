import { Icons } from "@/components/ui/IconData";
export const Skills = () => {
  return (
    <div className="px-[80px] py-[96px]">
      <div className=" flex flex-col gap-[48px] px-[32px]">
        <div className="flex flex-col gap-[16px] items-center">
          <div className=" bg-gray-300 rounded-xl w-fit">
            <p className="px-[20px] py-[4px]">Skills</p>
          </div>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        {/* <LoopedIcons data={Icons} /> */}
      </div>
    </div>
  );
};
