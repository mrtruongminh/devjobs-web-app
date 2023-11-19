import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Job } from "@/types";
import styles from "./Job.module.scss";
import Image from "next/image";
import Button from "@/components/Button";
import { ks } from "@/styles/fonts";

interface PageProps {
  job: Job;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/jobs");
  const jobs = await res.json();
  const paths = jobs.map((job: Job) => ({
    params: { id: job.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/jobs/${params?.id}`);
  const job = await res.json();
  return { props: { job } };
};

const Job: NextPage<PageProps> = ({ job }) => {
  return (
    <main className={`${ks.className} ${styles.main}`}>
      <div className={styles.header}>
        <div
          className={styles.headerLogo}
          style={{
            backgroundColor: job.logoBackground,
          }}
        >
          <Image
            src={job.logo}
            width={job.logoWidth}
            height={job.logoHeight}
            alt="Logo"
          />
        </div>
        <div className={styles.headerTitle}>
          <span>Scoot</span>
          <span>scoot.com</span>
        </div>
        <Button className={styles.headerButton}>Company Site</Button>
      </div>
    </main>
  );
};

export default Job;
