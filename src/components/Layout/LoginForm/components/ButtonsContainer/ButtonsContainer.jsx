import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ children }) => {
  return <div className={styles.buttons}>{children}</div>;
};

export default ButtonsContainer;
