import styles from "./JobCard.module.scss";
import Image from "next/image";
import myImg from "@/public/logos/scoot.svg";
import type { Job } from "@/types";

interface JobCardProps
  extends Pick<
    Job,
    "postedAt" | "contract" | "position" | "company" | "location"
  > {}

export default function JobCard({
  postedAt,
  contract,
  position,
  company,
  location,
}: JobCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <Image src={myImg} alt="Logo" />
      </div>
      <div className={styles.textWrapper}>
        <span>{postedAt}</span>
        <div />
        <span>{contract}</span>
      </div>
      <span className={styles.textPrimary}>{position}</span>
      <span className={styles.textSecondary}>{company}</span>
      <span className={styles.textTertiary}>{location}</span>
    </div>
  );
}
