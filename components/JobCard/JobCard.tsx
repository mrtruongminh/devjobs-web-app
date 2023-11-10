import styles from "./JobCard.module.scss";
import Image from "next/image";
import myImg from "@/public/logos/scoot.svg";

export default function JobCard() {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <Image src={myImg} alt="Logo" />
      </div>
      <div className={styles.textWrapper}>
        <span>5h ago</span>
        <div />
        <span>Full Time</span>
      </div>
      <span className={styles.textPrimary}>Senior Software Engineer</span>
      <span className={styles.textSecondary}>Scoot</span>
      <span className={styles.textTertiary}>United Kingdom</span>
    </div>
  );
}
