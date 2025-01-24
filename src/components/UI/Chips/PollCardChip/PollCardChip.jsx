import { CHIP } from "../../../../constants/data";
import styles from "./styles.module.css";

const PollCardChip = ({ text, type }) => {
  return <div className={`${styles.chip} ${type === CHIP.visibility ? styles.visibility : styles.status}`}>{text}</div>;
};

export default PollCardChip;
