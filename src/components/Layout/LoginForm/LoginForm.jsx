import { signIn } from "../../../utils/authentication/signIn";
import { signUp } from "../../../utils/authentication/signUp";
import { logoWithText } from "../../../utils/variables";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "../../UI/Input/Input";
import { useState } from "react";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [user, setUser] = useState({ password: "", email: "" });
  // NOTE:Change to firebase error
  const [userError, setUserError] = useState(false);
  //
  const [formType, setFormType] = useState("Login");
  const { setUser: setContextUser } = useAuth();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      let userResponse;
      if (formType === "Login") {
        userResponse = await signIn(user.email, user.password);
        setContextUser(userResponse);
      } else {
        userResponse = await signUp(user.email, user.password);
        setContextUser(userResponse);
      }
      if (userResponse) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error in signing in: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoWithText} alt="logo" />
      <h3 className={styles.title}>{formType}</h3>

      <form className={styles.form} type="submit">
        {userError && <p className={styles.error}>Email or Password are incorrect</p>}
        <Input type={"email"} name={"email"} placeholder={"Email"} value={user.email} setValue={setUser} />
        <Input type={"password"} name={"password"} placeholder={"Password"} value={user.password} setValue={setUser} />
        <div className={styles.buttons}>
          <button onClick={handleLogIn} className={styles.button}>
            {formType}
          </button>
          <button className={styles.button}>{formType} with Google</button>
        </div>
      </form>

      <p className={styles.signUp}>
        dont have an account?
        <a href="">
          <strong>{formType === "Login" ? "Sign up" : "Login"}</strong>
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
