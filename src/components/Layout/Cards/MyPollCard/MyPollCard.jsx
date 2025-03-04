import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";
import { Link } from "react-router-dom";
import Top from "./components/Top/Top";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const MyPollCard = ({ poll }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);

  return (
    <Link to={poll.id}>
      <div className={styles.container}>
        <div className={styles.card}>
          <Top poll={poll} />
          <Middle poll={poll} />
          <Bottom poll={poll} />
        </div>
      </div>
    </Link>
  );
};

export default MyPollCard;
