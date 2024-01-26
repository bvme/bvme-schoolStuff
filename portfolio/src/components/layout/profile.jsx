export const Profile = () => {
  return (
    <div className="py-[96px] px-[80px]">
      <div className="flex justify-center px-[32px] items-start gap-[48px]">
        <div className="flex flex-col gap-[48px]">
          <div className="flex gap-[8px] flex-col">
            <h1 className="font-bold text-6xl">Hi, I'm Sagar 👋</h1>
            <div className=" flex xl:flex-wrap">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[8px]">
              <img src="location.png" alt="" className="w-[24px] h-[24px]"/>
              Ahmedabad, India
            </div>
            <div className="flex gap-[8px]">
              <div className="flex flex-col justify-center items-center w-[24px] h-[24px]">
                <div className="flex bg-green-500 rounded-2xl w-[8px] h-[8px]"></div>
              </div>
              Available for new projects
            </div>
          </div>
          <div className="flex p-[6px] gap-[16px]">
            <img src="cat.png" alt="" className="w-[24px] h-[24px]" />
            <img src="twit.png" alt="" className="w-[24px] h-[24px]" />
            <img src="figma.png" alt="" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div>
          <img
            className="w-[280px] h-[320px] border-8 border-white"
            src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6ilx-NOb63~KzVYyZfxx4qzRN~gm9QHjip~sIpK9MTVSZsX~huwLpZqpJyqW7GDTT8lB8QtBCj5-2PtU-Ygp48aaoTUuruT2gkBXQL~lHchh7pKMdkHIJrb2oMYnvdAYQNxOMjjUIF8HDscGx5Nt7iw4F0WHx0HmiLM~STQEdaUIw0hp1E28oW5KSCJTY9dpgSECxgzNyTUNroqNwgsE5X4gYOS6SIFW~iIc98LskU-vU9DVPo3dEzu2N-2Fz4UiQZedr6UAGezp4AEFbGvN6RWj7EetJyu7prBfAxtS4Q0dAi36VtSyse6uAVnFGuXHQ9Y83-~6UcTO1YSVEzzGQ__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
