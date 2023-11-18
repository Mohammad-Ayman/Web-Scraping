import { ReactNode } from "react";
import styles from "./styles/button.module.css";

interface button {
  onClick?: () => void;
  children?: ReactNode;
}

const Button: React.FC<button> = ({ onClick, children }) => {
  return (
    <button className={styles["course-price"]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
