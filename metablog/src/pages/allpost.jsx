import { Header, Contact } from "../components/layout/index";

export default function PostPage() {
  return (
    <div>
      <div className=" flex flex-col gap-[80px]">
        <Header />
        post
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