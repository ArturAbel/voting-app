import { signUp, signUpWithGoogle } from "../../../utils/authentication/signUp";
import ButtonsContainer from "./components/ButtonsContainer/ButtonsContainer";
import ButtonsLogin from "./components/ButtonsLogin/ButtonsLogin";
import ButtonCreate from "./components/ButtonCreate/ButtonCreate";
import { signIn } from "../../../utils/authentication/signIn";
import LinkSignUp from "./components/LinkSignUp/LinkSignUp";
import { getAuth, validatePassword } from "firebase/auth";
import { useAuth } from "../../../context/AuthContext";
import { LOGIN_INPUT_CONFIG } from "./LoginForm.data";
import { getFeedbackMessage } from "./LoginForm.lib";
import { LINK } from "../../../constants/navigation";
import { useNavigate } from "react-router-dom";
import { Input } from "../../UI/Input/Input";
import { useEffect, useState } from "react";
import Logo from "../../UI/Logo/Logo";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [userData, setUserData] = useState({ email: "", displayName: "", profileImage: "", uid: "" });
  const [user, setUser] = useState({ password: "", email: "", displayName: "", profileImage: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [formType, setFormType] = useState("Login");
  const { setUser: setContextUser } = useAuth();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Handle sign in with email and password and sign up
  const handleWithEmailAndPassword = async (e) => {
    // Login with email and password
    e.preventDefault();
    try {
      let userResponse;
      if (formType === "Login") {
        userResponse = await signIn(user.email, user.password);
        setContextUser(userResponse);
      } else {
        // Sign up with email and password

        // Check password
        const status = await validatePassword(getAuth(), user.password);
        const feedbackMessage = getFeedbackMessage(status);
        setErrorMessage(feedbackMessage);
        userResponse = await signUp(user.email, user.password);
        // Set auth context
        setContextUser(userResponse);
        setStep(2);
      }
      // if (userResponse) {
      //   navigate("/");
      // }
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
    }
  };

  // Handle google in log in, which also does sign in
  const handleWithGoogle = async (e) => {
    e.preventDefault();
    let userResponse;
    try {
      if (formType === "Login") {
        userResponse = await signUpWithGoogle();
        console.log(`userResponse: `, userResponse);

        setContextUser(userResponse.user);
        const { creationTime, lastSignInTime } = userResponse.user.metadata;
        const isNewUser = userResponse.user?._tokenResponse?.isNewUser || creationTime === lastSignInTime;
        if (isNewUser) {
          setUserData((prev) => ({
            ...prev,
            displayName: userResponse.user.displayName,
            profileImage: userResponse.user.photoURL,
            email: userResponse.user.email,
            uid: userResponse.user.uid,
          }));
          setStep(2);
        } else {
          navigate(LINK.HOME);
        }
      }
    } catch (error) {
      console.error("Error in signing in: ", error);
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Add a check if display name and if profileImage are not empty, then replace
    console.log(`user: `, user);
    console.log(`userData: `, userData);
  };

  // Handle set form data
  const handleSetFormType = () => {
    setFormType((prevType) => (prevType === "Login" ? "Sign up" : "Login"));
    setUser({ password: "", email: "" });
  };

  // Error message
  useEffect(() => {
    if (!errorMessage) return;
    const showError = setTimeout(() => {
      setErrorMessage("");
    }, 3000);
    return () => {
      clearTimeout(showError);
    };
  }, [errorMessage]);

  // Add verification for user name and for image
  const renderInput = ({ placeHolder, type, name }) => {
    return (
      <Input
        errorMessage={name === "password" ? errorMessage : ""}
        placeholder={placeHolder}
        value={user[name]}
        setValue={setUser}
        type={type}
        name={name}
        key={name}
      />
    );
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} type="submit">
        <div className={styles.header}>
          <Logo />
        </div>
        <p className={styles.title}>Create polls, cast your vote, and spark conversations that matter.</p>
        <div className={styles.inputs}>
          {step === 1 && LOGIN_INPUT_CONFIG.slice(0, 2).map((inputConfig) => renderInput(inputConfig))}
          {step === 2 && LOGIN_INPUT_CONFIG.slice(2, 4).map((inputConfig) => renderInput(inputConfig))}
        </div>
        <ButtonsContainer>
          {step === 1 && (
            <ButtonsLogin
              handleWithEmailAndPassword={handleWithEmailAndPassword}
              handleWithGoogle={handleWithGoogle}
              formType={formType}
            />
          )}
          {step === 2 && <ButtonCreate handleCreateAccount={handleCreateAccount} />}
        </ButtonsContainer>
      </form>
      <LinkSignUp formType={formType} handleSetFormType={handleSetFormType} />
    </div>
  );
};

export default LoginForm;
