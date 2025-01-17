import styles from "./ButtonCreate.module.css";

const ButtonCreate = ({ handleCreateAccount,isLoading }) => {
  return (
    <button type="button" className={styles.button} onClick={handleCreateAccount}>
      {/* NOTE:Add spinner instead of text */}
      {isLoading ? "Loading..." : "Create Account"}
    </button>
  );
};

export default ButtonCreate;
