import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import CheckBox from "./components/CheckBox/CheckBox";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const CardProgressBar = ({ votes, maxVotes, percent, label, height = "big" }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <>
      {label ? (
        <>
          <div className={styles.labelContainer}>
            <div className={styles.checkbox}>
              <CheckBox />
              <div className={styles.label}>{label}</div>
            </div>
            <span className={styles.percentLabel}>{Math.floor(percent)}%</span>
          </div>
          <progress className={`${styles.progressTest} ${styles[height]}`} value={votes} max={maxVotes} />
        </>
      ) : (
        <progress className={`${styles.progress} ${styles[height]}`} value={votes} max={maxVotes} />
      )}
    </>
  );
};

export default CardProgressBar;
