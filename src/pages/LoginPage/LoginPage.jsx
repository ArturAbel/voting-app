import { LoginLoading } from "../../components/UI/LoginLoading/LoginLoading";
import { LoginError } from "../../components/UI/LoginError/LoginError";
import LoginForm from "../../components/Layout/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

export const LoginPage = ({ loading, error }) => {
  if (loading) return <LoginLoading />;
  if (error) return <LoginError errorMessage={error} />;

  return (
    <section className={styles.section}>
      <LoginForm />
    </section>
  );
};
