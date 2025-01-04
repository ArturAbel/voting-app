import { signUp, signUpWithGoogle } from "../../../utils/authentication/signUp";
import { signIn } from "../../../utils/authentication/signIn";
import { getAuth, validatePassword } from "firebase/auth";
import { logoWithText } from "../../../utils/variables";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "../../UI/Input/Input";
import { useState } from "react";

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
        // NOTE:Move to function



        if (!status.isValid) {
          const needsLowerCase = !status.containsLowercaseLetter;
          const needsUpperCase = !status.containsUppercaseLetter;
          const needsNumber = !status.containsNumericCharacter;
          let feedbackMessage = "Password must include ";
          if (needsLowerCase) feedbackMessage += " a lowercase letter";
          if (needsUpperCase) feedbackMessage += " an uppercase letter";
          if (needsNumber) feedbackMessage += " a number";
          feedbackMessage = feedbackMessage.replace(/.*\b(a|an)\b(?!.*\b(a|an)\b)/, (match) =>
            match.replace(/\b( a| an)\b/, " and")
          ); //




          setErrorMessage(feedbackMessage);
        }
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
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoWithText} alt="logo" />
      <h3 className={styles.title}>{formType}</h3>

      <form className={styles.form} type="submit">
        <Input type={"email"} name={"email"} placeholder={"Email"} value={user.email} setValue={setUser} />
        <div>
          <Input
            placeholder={"Password"}
            value={user.password}
            setValue={setUser}
            type={"password"}
            name={"password"}
          />
          {/* NOTE:Lower it inside the input structure */}
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
        <div className={styles.buttons}>
          <button onClick={handleWithEmailAndPassword} className={styles.button}>
            {formType}
          </button>
          {formType === "Login" && (
            <button onClick={handleWithGoogle} className={styles.button}>
              {formType} with Google
            </button>
          )}
        </div>
      </form>
      <div className={styles.signupContainer}>
        <p>dont have an account?</p>
        <strong className={styles.signup} onClick={handleSetFormType}>
          {formType === "Login" ? "Sign up" : "Login"}
        </strong>
      </div>
    </div>
  );
};

export default LoginForm;
