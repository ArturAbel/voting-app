import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import { CHIP } from "../../../../constants/data";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const PollCardChip = ({ text, type }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return <div className={`${styles.chip} ${type === CHIP.visibility ? styles.visibility : styles.status}`}>{text}</div>;
};

export default PollCardChip;
