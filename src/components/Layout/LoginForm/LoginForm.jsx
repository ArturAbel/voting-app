import { logoWithText } from "../../../utils/variables";
import { Input } from "../../UI/Input/Input";
import { useState } from "react";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [user, setUser] = useState({ password: "", email: "" });
  const [userError, setUserError] = useState(false);
  const [form, setForm] = useState("Login");

  console.log(`user: `, user);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoWithText} alt="logo" />
      <h3 className={styles.title}>{form}</h3>

      <form className={styles.form} action="">
        {userError && <p className={styles.error}>Email or Password are incorrect</p>}
        <Input type={"email"} name={"email"} placeholder={"Email"} value={user.email} setValue={setUser} />
        <Input type={"password"} name={"password"} placeholder={"Password"} value={user.password} setValue={setUser} />
        <div className={styles.buttons}>
          <button className={styles.button}>{form}</button>
          <button className={styles.button}>{form}</button>
        </div>
      </form>

      <p className={styles.signUp}>
        dont have an account?
        <a href="">
          <strong>{form === "Login" ? "Sign up" : "Login"}</strong>
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
