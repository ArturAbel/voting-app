import { findVotedOption } from "../../../../utils/votes/checkVote";
import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import { selectUser } from "../../../../redux/slices/userSlice";
import CheckBox from "./components/CheckBox/CheckBox";
import { useSelector } from "react-redux";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const CardProgressBar = ({ votes, maxVotes, percent, label, height = "big", voters, hasVoted }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const userData = useSelector(selectUser);
  const checkedOption = findVotedOption({ voters, userData });

  return (
    <>
      {label ? (
        <>
          <div className={styles.labelContainer}>
            <div className={styles.checkbox}>
              <CheckBox checked={checkedOption} hasVoted={hasVoted} />
              <div className={styles.label}>{label}</div>
            </div>
            <span className={styles.percentLabel}>{Math.floor(percent)}%</span>
          </div>
          <progress
            className={`${styles[height]} ${
              checkedOption && hasVoted ? styles.open : hasVoted ? styles.disabled : styles.open
            }`}
            value={votes}
            max={maxVotes}
          />
        </>
      ) : (
        <progress className={`${styles.progress} ${styles[height]}`} value={votes} max={maxVotes} />
      )}
    </>
  );
};

export default CardProgressBar;
