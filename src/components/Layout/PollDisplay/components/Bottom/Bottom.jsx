import { useThemeStyles } from "../../../../../hooks/useThemeStyles";
import { GoComment } from "react-icons/go";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Bottom = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <div className={styles.bottom}>
      <div className={styles.left}>
        <GoComment className={styles.commentsIcon} />
      </div>
      <div className={styles.right}>
        <button className={styles.button}>Results</button>
        <button className={styles.button}>Vote</button>
      </div>
    </div>
  );
};

export default Bottom;
