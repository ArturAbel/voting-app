import CardProgressBar from "../../../../../UI/ProgressBar/CardProgressBar/CardProgressBar";
import { countPercentage, sumVotes } from "../../../../../../utils/content/math";

import styles from "./styles.module.css";

const Middle = ({ poll }) => {
  return (
    <div className={styles.middle}>
      <div className={styles.results}>
        <div>Results:</div>
        <div>{`${sumVotes(poll)} votes`}</div>
      </div>
      <div className={styles.progressContainer}>
        {poll.options.map((option) => {
          return (
            <CardProgressBar
              percent={countPercentage(option.votes, sumVotes(poll))}
              maxVotes={sumVotes(poll)}
              votes={option.votes}
              key={option.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Middle;
