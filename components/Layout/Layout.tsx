import { PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Header from "@/components/Header";

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
