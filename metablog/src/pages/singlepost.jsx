import { Header, Contact } from "../components/layout/index";
import { SinglePostData } from "../components/UI/SinglePostData";

export default function SinglePost() {
  return (
    <div>
      <div className=" flex flex-col gap-[80px]">
        <Header />
        <SinglePostData />
        <Contact />
      </div>
    </div>
  );
}
export async function getServerSideProps({ query }) {
  const { slug } = query;
  const res = await fetch(`https://dev.to/api/articles/gereltuyamz/${slug}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}