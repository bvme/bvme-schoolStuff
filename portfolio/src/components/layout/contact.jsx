export const Contact = () => {
  return (
    <div className=" px-[80px] py-[96px]">
      <div className=" flex flex-col px-[32px] gap-[48px]">
        <div className="flex flex-col items-center gap-[16px]">
          <div className=" bg-gray-300 rounded-xl w-fit dark:bg-gray-600">
            <p className="px-[20px] py-[4px]">Get in touch</p>
          </div>
          <p>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-[16px]">
          <div className="flex items-center gap-[20px]">
            <div>
              <img src="email.png" alt="" />
            </div>
            <h1 className=" font-bold text-4xl">reachsagarshah@gmail.com</h1>
            <div>
              <img src="copy-paste.png" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div>
              <img src="phone.png" alt="" />
            </div>
            <h1 className=" font-bold text-4xl">+91 8980500565</h1>
            <div>
              <img src="copy-paste.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div>You may also find me on these platforms!</div>
          <div className="flex">
            <div className=" p-1.5">
              <img src="cat.png" alt="" />
            </div>
            <div className=" p-1.5">
              <img src="twit.png" alt="" />
            </div>
            <div className=" p-1.5">
              <img src="figma.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
