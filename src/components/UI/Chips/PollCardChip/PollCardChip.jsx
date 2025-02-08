import { useThemeStyles } from "../../../../hooks/useThemeStyles";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";
import Tooltip from "../../Tooltip/Tooltip";

const PollCardChip = ({ text, type, tip }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <div className={`${styles.chip} ${styles[type]}`}>
      <Tooltip tip={tip}>{text}</Tooltip>
    </div>
  );
};

export default PollCardChip;
