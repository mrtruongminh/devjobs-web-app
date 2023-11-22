import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Job } from "@/types";
import styles from "./Job.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
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
    <>
      <Header />
      <main className={`${ks.className} ${styles.wrapper}`}>
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
        <div className={styles.main}>
          <section>
            <div className={styles.mainHeader}>
              <div className={styles.mainHeaderTexts}>
                <div>
                  <span>{job.postedAt}</span>
                  <div />
                  <span>{job.contract}</span>
                </div>
                <span>{job.position}</span>
                <span>{job.location}</span>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className={styles.paragraph}>{job.description}</p>
          </section>
          <section>
            <span className={styles.sectionTitle}>Requirements</span>
            <p className={styles.paragraph}>{job.requirements.content}</p>
            <ul className={`${styles.list} ${styles.unorderedList}`}>
              {job.requirements.items.map((n, idx) => (
                <li key={idx}>{n}</li>
              ))}
            </ul>
          </section>
          <section>
            <span className={styles.sectionTitle}>What You Will Do</span>
            <p className={styles.paragraph}>{job.role.content}</p>
            <ol className={`${styles.list} ${styles.orderedList}`}>
              {job.role.items.map((n, idx) => (
                <li key={idx}>{n}</li>
              ))}
            </ol>
          </section>
        </div>
      </main>
      <footer className={`${ks.className} ${styles.footer}`}>
        <div>
          <div className={styles.footerTexts}>
            <span>Senior Software Engineer</span>
            <span>So Digital Inc.</span>
          </div>
          <Button>Apply Now</Button>
        </div>
      </footer>
    </>
  );
};

export default Job;
