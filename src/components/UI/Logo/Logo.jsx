import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <div className={`${styles.logoBar} ${styles.left}`} />
        <div className={`${styles.logoBar} ${styles.center}`} />
        <div className={`${styles.logoBar} ${styles.right}`} />
      </div>
      <div className={styles.logoTextContainer}>
        <p className={styles.logoText}>PollPal</p>
      </div>
    </div>
  );
};

export default Logo;
