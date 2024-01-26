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
    <div className="flex flex-col">
      <Header />
      <Profile />
      <About />
      <Skills />
      <Experience />
      <Work />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}