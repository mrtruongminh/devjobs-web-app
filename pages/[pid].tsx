import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Job } from "@/types";

interface PageProps {
  post: Job;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/jobs");
  const jobs = await res.json();
  const paths = jobs.map((post: Job) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/jobs/${params?.id}`);
  const post = await res.json();
  return { props: { post } };
};

const Page: NextPage<PageProps> = ({ post }) => {
  return <p>TEST</p>;
};

export default Page;
