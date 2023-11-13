import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
