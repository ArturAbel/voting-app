import styles from "./styles.module.css";

const Overlay = ({ children }) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
