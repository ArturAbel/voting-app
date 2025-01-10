import styles from "./LinkSignUp.module.css";

const LinkSignUp = ({ formType, handleSetFormType }) => {
  return (
    <div className={styles.container}>
      <p>{formType === "Login" ? "Don't have an account?" : "Already have an account?"}</p>
      <strong className={styles.link} onClick={handleSetFormType}>
        {formType === "Login" ? "Sign up" : "Login"}
      </strong>
    </div>
  );
};

export default LinkSignUp;
