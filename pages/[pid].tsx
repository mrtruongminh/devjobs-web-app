import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Post } from "@/types";

interface PageProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  const paths = posts.map((post: Post) => ({
    params: { pid: post.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${params?.pid}`);
  const post = await res.json();
  return { props: { post } };
};

const Page: NextPage<PageProps> = ({ post }) => {
  return <p>TEST</p>;
};

export default Page;
