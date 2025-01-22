import { useThemeStyles } from "../../hooks/useThemeStyles";

import utilStyles from "../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const PollBoard = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <section className={`${utilStyles.grid} ${utilStyles.scroll} ${styles.section}`}>
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
      <div style={{ width: "100%", height: "100%", border: "1px solid black", opacity: 0.1 }} />
    </section>
  );
};

export default PollBoard;
