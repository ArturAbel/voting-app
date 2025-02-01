import { useThemeStyles } from "../../../../hooks/useThemeStyles";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const PollCardChip = ({ text, type }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return <div className={`${styles.chip} ${styles[type]}`}>{text}</div>;
};

export default PollCardChip;
