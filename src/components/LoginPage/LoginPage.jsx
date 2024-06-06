import { LoginLoading } from "./LoginLoading/LoginLoading";
import useFetchData from "../../hooks/useFetchData";
import validateUser from "../../utils/validateUser";
import { votersURL } from "../../utils/variables";
import findUser from "../../utils/findUser";
import { Input } from "./Input/Input";
import { useState } from "react";

import "./LoginPage.css";
import { LoginError } from "./LoginError/LoginError";

export const LoginPage = ({ setValidUser, setUser }) => {
  const { data, loading, error } = useFetchData(votersURL);
  const [userError, setUserError] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const user = findUser(data, email);
    const validUser = validateUser(user, password, email);
    setUser(user);
    if (!validUser) {
      setUserError(true);
      return;
    }
    setValidUser(validUser);
    setUserError(false);
  };

  
  if (loading) return <LoginLoading />;
  if (error) return <LoginError errorMessage={error}/>;
  return (
    <section className="registration-section">
      <div className="registration-container">
        <img
          className="registration-logo"
          src="../../assets/svg/logo/logo.svg"
          alt="logo"
        />
        <h3 className="registration-title">Welcome</h3>
        <form className="registration-form" action="">
          {userError && <p>Email or Password are incorrect</p>}
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            value={email}
            setValue={setEmail}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            value={password}
            setValue={setPassword}
          />
          <button className="registration-button" onClick={handleLogin}>
            login
          </button>
        </form>
        <p className="registration-sign">
          dont have an account? <a href=""></a>sign up
        </p>
      </div>
    </section>
  );
};
