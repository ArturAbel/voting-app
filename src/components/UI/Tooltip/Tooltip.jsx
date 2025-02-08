import { useThemeStyles } from "../../../hooks/useThemeStyles";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Tooltip = ({ children, tip }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.text}>{tip}</div>
    </div>
  );
};

export default Tooltip;
