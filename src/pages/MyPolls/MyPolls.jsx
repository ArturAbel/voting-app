import NewPoll from "../../components/layout/Cards/NewPoll/NewPoll";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

import utilStyles from "../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

import poll from "./mock.json";

function setCapitalSentence(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  const capitalSentence = firstLetter + string.slice(1).toLowerCase();
  return capitalSentence;
}

const MyPolls = () => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  return (
    <section className={`${utilStyles.grid} ${utilStyles.scroll} ${styles.section}`}>
      <NewPoll />

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.top}>
            <div className={styles.avatar}></div>
            <p className={styles.title}>{setCapitalSentence(poll.title)}</p>
            <PiDotsThreeOutlineFill  className={styles.options} />
          </div>

          <div className={styles.middle}></div>

          <div className={styles.bottom}></div>
        </div>
      </div>
    </section>
  );
};

export default MyPolls;
