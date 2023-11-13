import styles from "./JobCard.module.scss";
import Image from "next/image";
import type { Job } from "@/types";

interface JobCardProps extends Job {}

export default function JobCard({
  postedAt,
  contract,
  position,
  company,
  location,
  logo,
  logoBackground,
  logoWidth,
  logoHeight,
}: JobCardProps) {
  return (
    <div className={styles.card}>
      <div
        className={styles.logo}
        style={{
          backgroundColor: logoBackground,
        }}
      >
        <Image src={logo} width={logoWidth} height={logoHeight} alt="Logo" />
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
