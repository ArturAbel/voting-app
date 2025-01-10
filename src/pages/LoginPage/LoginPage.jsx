import AnimationContainer from "../../components/layout/LoginForm/components/AnimationContainer/AnimationContainer";
import { LoginLoading } from "../../components/UI/LoginLoading/LoginLoading";
import { LoginError } from "../../components/UI/LoginError/LoginError";
import LoginForm from "../../components/layout/LoginForm/LoginForm";

import styles from "./LoginPage.module.css";

export const LoginPage = ({ loading, error }) => {
  // TODO:Fix this later
  if (loading) return <LoginLoading />;
  if (error) return <LoginError errorMessage={error} />;

  // NOTE:Move to text file
  const QUOTE = '" If you can’t explain your opinion simply, just drop it in the poll anyway. "';

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.quoteContainer}>
          <p className={styles.quote}>{QUOTE}</p>
          <span> — Some Really Smart Person</span>
        </div>
        <AnimationContainer />
      </div>
      <LoginForm />
    </section>
  );
};
