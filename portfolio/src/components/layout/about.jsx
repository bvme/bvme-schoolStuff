export const About = () => {
  return (
    <div className="px-[80px] py-[96px] bg-gray-100 dark:bg-slate-900">
      <div className="flex flex-col justify-center items-center gap-[48px] px-[32px]">
        <div className=" bg-gray-300 rounded-xl w-fit dark:bg-gray-600">
          <div className="px-[20px] py-[4px]">About me</div>
        </div>
        <div className="flex gap-[48px]">
          <div>
            <img src="pic.png" alt="" className=" w-[400px] h-[480px]" />
          </div>
          <div className="flex flex-col gap-[16px] *:text-wrap *:w-[584px]">
            <h1 className=" font-bold text-3xl">
              Curious about me? Here you have it:
            </h1>
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </div>
            <div>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </div>
            <div>Finally, some quick bits about me.</div>
            <div className="flex gap-[10px]">
              <ul>
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
              <ul>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
            <div>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
