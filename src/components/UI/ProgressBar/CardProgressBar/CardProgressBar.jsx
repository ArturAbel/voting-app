import { useThemeStyles } from "../../../../hooks/useThemeStyles";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const CardProgressBar = ({ votes, maxVotes, percent }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <progress className={styles.progress} value={votes} max={maxVotes}>
      {percent}
    </progress>
  );
};

export default CardProgressBar;
