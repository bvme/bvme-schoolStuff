export const Header = () => {
  return (
    <div className="flex justify-between items-center self-stretch px-[80px] py-[16px]">
      <div className="flex w-full justify-between items-center px-[32px]">
        <div>
          <img src="_.png" alt="" />
        </div>
        <div className="flex gap-4">
          <button>About</button>
          <button>Work</button>
          <button>Testimonials</button>
          <button>Contact</button>
          <div className="border-l-black border-l-[1px]"></div>
          <button>
            <img src="sun.png" alt="" />
          </button>
          <button className="bg-black text-white rounded-xl">
            <p className="px-[16px] py-[6px]">Download CV</p>
          </button>
        </div>
      </div>
    </div>
  );
};
