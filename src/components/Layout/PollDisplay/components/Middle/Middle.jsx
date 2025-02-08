import CardProgressBar from "../../../../UI/ProgressBar/CardProgressBar/CardProgressBar";
import { countPercentage, sumVotes } from "../../../../../utils/content/math";
import { useThemeStyles } from "../../../../../hooks/useThemeStyles";
import Hashtag from "../../../../UI/Chips/Hashtag/Hashtag";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Middle = ({ selectedPoll }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const votesSum = sumVotes(selectedPoll);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{selectedPoll.title}</div>
        <div className={styles.hashtags}>
          {selectedPoll.hashtags.length > 0 &&
            selectedPoll.hashtags.map((hashtag) => <Hashtag tag={hashtag} key={hashtag} />)}
        </div>
      </div>
      {selectedPoll.options.map((option) => (
        <CardProgressBar
          percent={countPercentage(option.votes, votesSum)}
          votes={option.votes}
          maxVotes={votesSum}
          label={option.text}
          key={option.id}
        />
      ))}
    </div>
  );
};

export default Middle;
