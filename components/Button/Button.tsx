import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends PropsWithChildren {}

export default function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
