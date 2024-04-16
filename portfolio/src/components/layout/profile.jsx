export const Profile = () => {
  return (
		<div className="py-[96px] px-[80px]">
			<div className="flex justify-center px-[32px] items-start gap-[48px]">
				<div className="flex flex-col gap-[48px]">
					<div className="flex gap-[8px] flex-col">
						<h1 className="font-bold text-6xl">Hi, I'm Misheel 👋</h1>
						<div className=" flex text-3xl xl:flex-wrap">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
							expedita dolore quam voluptatem ab cumque sed molestiae aut
							deserunt, quibusdam assumenda deleniti, dignissimos at ullam error
							unde quisquam corporis enim?
						</div>
					</div>
					<div className="flex flex-col gap-[8px]">
						<div className="flex gap-[8px]">
							<img src="location.png" alt="" className="w-[24px] h-[24px]" />
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
				<div className="w-[1000px]">
					<img
						className=""
						src="pic.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
