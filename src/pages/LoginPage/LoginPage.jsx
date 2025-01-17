import AnimationContainer from "../../components/layout/LoginForm/components/AnimationContainer/AnimationContainer";
import { LoginLoading } from "../../components/UI/LoginLoading/LoginLoading";
import Quote from "../../components/layout/LoginForm/components/Quote/Quote";
import { LoginError } from "../../components/UI/LoginError/LoginError";
import LoginForm from "../../components/layout/LoginForm/LoginForm";
import { QUOTE } from "./data/LoginPage.data";

import styles from "./LoginPage.module.css";

export const LoginPage = ({ loading, error }) => {
  // TODO:Fix this later
  if (loading) return <LoginLoading />;
  if (error) return <LoginError errorMessage={error} />;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Quote quote={QUOTE} />
        <AnimationContainer />
      </div>
      <LoginForm />
    </section>
  );
};
