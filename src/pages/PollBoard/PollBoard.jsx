import { useThemeStyles } from "../../hooks/useThemeStyles";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const PollBoard = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return <section className={styles.section}></section>;
};

export default PollBoard;
