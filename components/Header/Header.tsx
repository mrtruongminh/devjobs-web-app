import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/public/desktop/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="devjobs" />
    </header>
  );
}

export default Header;
