import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import { BiBarChart } from "react-icons/bi";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const NewPoll = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <BiBarChart size={40} />
        <div>Design a Poll</div>
      </div>
    </div>
  );
};

export default NewPoll;
