import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/public/desktop/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} priority alt="devjobs" />
    </header>
  );
}
