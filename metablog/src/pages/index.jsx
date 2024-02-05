import {
  Header,
  Intro,
  Trending,
  Post,
  Load,
  Contact,
} from "../components/layout/index";
export default function Home() {
  return (
    <div className=" flex flex-col gap-[80px] px-[300px]">
      <Header />
      <Intro />
      <Trending />
      <Post />
      <Load />
      <Contact />
    </div>
  );
}
// import { FirstContextProvider } from "@/components/UI/Context";
// import { Component } from "@/components/layout/component";
// export default function Home() {
//   return (
//     <FirstContextProvider>

//     </FirstContextProvider>
//   )
// }
