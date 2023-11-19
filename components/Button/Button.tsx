import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

export default function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
