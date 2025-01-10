import styles from "./ButtonCreate.module.css";

const ButtonCreate = ({ handleCreateAccount }) => {
  return (
    <button type="button" className={styles.button} onClick={handleCreateAccount}>
      Create Account
    </button>
  );
};

export default ButtonCreate;
