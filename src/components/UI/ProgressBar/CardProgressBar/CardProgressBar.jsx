import { useThemeStyles } from "../../../../hooks/useThemeStyles";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const CardProgressBar = ({ votes, maxVotes, percent, label, height = "big" }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <>
      {label && <div>{label}</div>}
      <progress className={`${styles.progress} ${styles[height]}`} value={votes} max={maxVotes}>
        {percent}
      </progress>
    </>
  );
};

export default CardProgressBar;
