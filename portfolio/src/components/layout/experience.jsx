export const Experience = () => {
  return (
    <div className="px-[80px] py-[96px] bg-gray-100 dark:bg-slate-900">
      <div className="flex flex-col gap-[48px] px-[32px] justify-center items-center">
        <div className="flex flex-col items-center gap-[16px]">
          <div className=" bg-gray-300 rounded-xl w-fit dark:bg-gray-600">
            <div className="px-[20px] py-[4px]">Experience</div>
          </div>
          <div>Here is a quick summary of my most recent experiences:</div>
        </div>
        <div className=" p-[32px] w-[896px] rounded-xl bg-white dark:bg-gray-800 shadow-[0px_2px_2px_0px rgba(0, 0, 0, 0.06), 0px_4px_3px_0px rgba(0, 0, 0, 0.07)]">
          <div className="flex gap-[48px]">
            <div>
              <img src="logo-upwork.png" alt="" />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h1 className="font-bold">Sr. Frontend Developer</h1>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div>Nov 2021 - Present</div>
          </div>
        </div>
        <div className=" p-[32px] w-[896px] rounded-xl bg-white dark:bg-gray-800">
          <div className="flex gap-[48px]">
            <div>
              <img src="logo-upwork.png" alt="" />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h1 className=" font-bold">Team Lead</h1>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <div>Nov 2021 - Present</div>
          </div>
        </div>
        <div className=" p-[32px] w-[896px] rounded-xl bg-white dark:bg-gray-800">
          <div className="flex gap-[48px]">
            <div>
              <img src="logo-upwork.png" alt="" />
            </div>
            <div className="flex flex-col gap-[16px]">
              <h1 className=" font-bold">Full Stack Developer</h1>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div>Nov 2021 - Present</div>
          </div>
        </div>
      </div>
    </div>
  );
};
