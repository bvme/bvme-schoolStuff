import {
  Header,
  Intro,
  Trending,
  Post,
  Load,
  Contact,
  Footer,
} from "../components/layout/index";
export default function Home() {
  return (
    <div className="gap-[80px]">
      <Header />
      <Intro />
      <Trending />
      <Post />
      <Load />
      <Contact />
      <Footer />
    </div>
  );
}
