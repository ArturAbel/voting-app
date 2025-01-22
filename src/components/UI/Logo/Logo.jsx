import { useThemeStyles } from "../../../hooks/useThemeStyles";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Logo = ({ displayText = true }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <div className={`${styles.logoBar} ${styles.left}`} />
        <div className={`${styles.logoBar} ${styles.center}`} />
        <div className={`${styles.logoBar} ${styles.right}`} />
      </div>
      {displayText && <div className={styles.logoText}>PollPal</div>}
    </div>
  );
};

export default Logo;
