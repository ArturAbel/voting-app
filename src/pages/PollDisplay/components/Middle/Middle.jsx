import CardProgressBar from "../../../../components/UI/ProgressBar/CardProgressBar/CardProgressBar";
import { countPercentage, sumVotes } from "../../../../utils/content/math";
import Hashtag from "../../../../components/UI/Chips/Hashtag/Hashtag";
import { checkHasVoted } from "../../../../utils/votes/checkVote";
import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import { selectUser } from "../../../../redux/slices/userSlice";
import { useSelector } from "react-redux";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Middle = ({ poll }) => {
  const userData = useSelector(selectUser);
  const hasVoted = checkHasVoted({ poll, userData });
  const styles = useThemeStyles(lightStyles, darkStyles);
  const votesSum = sumVotes(poll);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{poll.title}</div>
        <div className={styles.hashtags}>
          {poll.hashtags.length > 0 && poll.hashtags.map((hashtag) => <Hashtag tag={hashtag} key={hashtag} />)}
        </div>
      </div>
      {poll.options.map((option) => (
        <CardProgressBar
          percent={countPercentage(option.votes, votesSum)}
          voters={option.voters}
          votes={option.votes}
          maxVotes={votesSum}
          label={option.text}
          hasVoted={hasVoted}
          key={option.id}
        />
      ))}
    </div>
  );
};

export default Middle;
