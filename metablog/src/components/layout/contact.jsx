export const Contact = () => {
  return (
    <div className="bg-gray-200">
      <div className=" flex flex-col px-[300px] py-[50px] gap-6 max-[1200px]:px-[200px] max-[1000px]:px-[100px] max-[800px]:px-[0px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[30%] gap-4">
            <div className=" font-bold">ABOUT</div>
            <div className="flex flex-wrap text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              eveniet hic doloremque. Quas aliquam natus quae quibusdam eius
              cum. Nemo maiores obcaecati est dolorum illo ducimus vel eum
              consectetur provident.
            </div>
            <div>
              <div>email</div>
              <div>phone</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button>Home</button>
            <button>Blog</button>
            <button>Contact</button>
          </div>
          <div>icons icons icons icons</div>
        </div>
        <div className="border-[0.5px] border-gray-400 w-full"></div>
        <div className="flex justify-between">
          <div>logo</div>
          <div className="flex gap-8">
            <button> Terms of use </button>
            <button> Privacy Policy </button>
            <button> Cookie Policy </button>
          </div>
        </div>
      </div>
    </div>
  );
};
