import { FaGoogle } from "react-icons/fa";

import styles from "./ButtonsLogin.module.css";

const ButtonsLogin = ({ handleWithEmailAndPassword, formType, handleWithGoogle }) => {
  return (
    <>
      <button onClick={handleWithEmailAndPassword} className={`${styles.button} ${styles.buttonLogin}`}>
        {formType}
      </button>
      {formType === "Login" && (
        <>
          <div className={styles.text}>
            <p>or</p>
          </div>
          <button onClick={handleWithGoogle} className={styles.button}>
            <FaGoogle />
            {formType} with Google
          </button>
        </>
      )}
    </>
  );
};

export default ButtonsLogin;
