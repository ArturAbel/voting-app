import { LoginLoading } from "../../components/LoginLoading/LoginLoading";
import { LoginError } from "../../components/LoginError/LoginError";
import validateAdmin from "../../utils/validateAdmin";
import validateUser from "../../utils/validateUser";
import { Input } from "../../components/Input/Input";
import { logoWithText } from "../../utils/variables";
import { useNavigate } from "react-router-dom";
import findUser from "../../utils/findUser";
import { useState } from "react";

import "./LoginPage.css";

export const LoginPage = ({
  setValidUser,
  setUser,
  setIsAdmin,
  users,
  loading,
  error,
}) => {
  const [userError, setUserError] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = findUser(users, email);
    const validUser = validateUser(user, password, email);
    const isAdmin = validateAdmin(user);

    setUser(user);
    if (!validUser) {
      setUserError(true);
      return;
    }
    setValidUser(validUser);
    setIsAdmin(isAdmin);
    setUserError(false);
    navigate("/user");
  };

  if (loading) return <LoginLoading />;
  if (error) return <LoginError errorMessage={error} />;
  return (
    <section className="registration-section">
      <div className="registration-container">
        <img className="registration-logo" src={logoWithText} alt="logo" />
        <h3 className="registration-title">Welcome</h3>
        <form className="registration-form" action="">
          {userError && (
            <p className="registration-error">
              Email or Password are incorrect
            </p>
          )}
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
          dont have an account?
          <a href="">
            <strong>sign up</strong>
          </a>
        </p>
      </div>
    </section>
  );
};
