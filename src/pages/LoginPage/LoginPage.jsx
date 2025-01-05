import AnimationContainer from "../../components/layout/LoginForm/AnimationContainer/AnimationContainer";
import { LoginLoading } from "../../components/UI/LoginLoading/LoginLoading";
import { LoginError } from "../../components/UI/LoginError/LoginError";
import LoginForm from "../../components/layout/LoginForm/LoginForm";

import styles from "./LoginPage.module.css";

export const LoginPage = ({ loading, error }) => {
  // TODO:Fix this later
  if (loading) return <LoginLoading />;
  if (error) return <LoginError errorMessage={error} />;

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <AnimationContainer />
      </div>
      <LoginForm />
    </section>
  );
};
