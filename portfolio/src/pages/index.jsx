import {
  Header,
  Profile,
  About,
  Work,
  Skills,
  Experience,
  Contact,
  Footer,
} from "@/components/layout/index";

export default function Home() {
  return (
    <div className=" container flex flex-col mx-[250px]">
      <Header />
      <Profile />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
