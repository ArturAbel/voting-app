import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";
import Top from "./components/Top/Top";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const MyPollCard = ({ poll, setSelectedPoll }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  const handlePollClick = () => {
    setSelectedPoll(poll);
  };

  return (
    <div className={styles.container} onClick={handlePollClick}>
      <div className={styles.card}>
        <Top poll={poll} />
        <Middle poll={poll} />
        <Bottom poll={poll} />
      </div>
    </div>
  );
};

export default MyPollCard;
