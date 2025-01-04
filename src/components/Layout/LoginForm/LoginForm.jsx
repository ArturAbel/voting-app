import { signUp, signUpWithGoogle } from "../../../utils/authentication/signUp";
import { signIn } from "../../../utils/authentication/signIn";
import { getAuth, validatePassword } from "firebase/auth";
import { logoWithText } from "../../../utils/variables";
import { useAuth } from "../../../context/AuthContext";
import { getFeedbackMessage } from "./LoginForm.lib";
import { useNavigate } from "react-router-dom";
import { Input } from "../../UI/Input/Input";
import { useEffect, useState } from "react";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [user, setUser] = useState({ password: "", email: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [formType, setFormType] = useState("Login");
  const { setUser: setContextUser } = useAuth();
  const navigate = useNavigate();

  const handleWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      let userResponse;
      if (formType === "Login") {
        userResponse = await signIn(user.email, user.password);
        setContextUser(userResponse);
      } else {
        const status = await validatePassword(getAuth(), user.password);
        const feedbackMessage = getFeedbackMessage(status);
        setErrorMessage(feedbackMessage);
        userResponse = await signUp(user.email, user.password);
        setContextUser(userResponse);
      }
      if (userResponse) {
        navigate("/");
      }
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
    }
  };

  const handleWithGoogle = async (e) => {
    e.preventDefault();
    let userResponse;
    try {
      if (formType === "Login") {
        userResponse = await signUpWithGoogle();
        setContextUser(userResponse);
      }
      if (userResponse) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error in signing in: ", error);
    }
  };

  const handleSetFormType = () => {
    setFormType((prevType) => (prevType === "Login" ? "Sign up" : "Login"));
    setUser({ password: "", email: "" });
  };

  useEffect(() => {
    if (!errorMessage) return;
    const showError = setTimeout(() => {
      setErrorMessage("");
    }, 3000);
    return () => {
      clearTimeout(showError);
    };
  }, [errorMessage]);

  return (
    <div className={styles.container}>
      <form className={styles.form} type="submit">
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <div className={`${styles.logoBar} ${styles.left}`} />
              <div className={`${styles.logoBar} ${styles.center}`} />
              <div className={`${styles.logoBar} ${styles.right}`} />
            </div>
            <div className={styles.logoTextContainer}>
              <p className={styles.logoText}>PollPal</p>
            </div>
          </div>
        </div>

        <p className={styles.title}>Create polls, cast your vote, and spark conversations that matter.</p>

        <div className={styles.inputs}>
          <Input type={"email"} name={"email"} placeholder={"Email"} value={user.email} setValue={setUser} />
          <Input
            errorMessage={errorMessage}
            placeholder={"Password"}
            value={user.password}
            setValue={setUser}
            type={"password"}
            name={"password"}
          />
        </div>

        <div className={styles.buttons}>
          <button onClick={handleWithEmailAndPassword} className={`${styles.button} ${styles.buttonLogin}`}>
            {formType}
          </button>
          {formType === "Login" && (
            <>
              <div className={styles.text}>
                <p>or</p>
              </div>
              <button onClick={handleWithGoogle} className={styles.button}>
                {formType} with Google
              </button>
            </>
          )}
        </div>
      </form>

      <div className={styles.signupContainer}>
        <p>{formType === "Login" ? "Don't have an account?" : "Already have an account?"}</p>
        <strong className={styles.signup} onClick={handleSetFormType}>
          {formType === "Login" ? "Sign up" : "Login"}
        </strong>
      </div>
    </div>
  );
};

export default LoginForm;
