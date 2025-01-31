import { useThemeStyles } from "../../../../hooks/useThemeStyles";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const CardProgressBar = ({ votes, maxVotes, percent, label, height = "big" }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <>
      {label && (
        <div className={styles.labelContainer}>
          <div className={styles.label}>{label}</div>
          <span className={styles.percentLabel}>{Math.floor(percent)}%</span>
        </div>
      )}
      <progress className={`${styles.progress} ${styles[height]}`} value={votes} max={maxVotes} />
    </>
  );
};

export default CardProgressBar;
