import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import { checkHasVoted } from "../../../../utils/votes/checkVote";
import { selectUser } from "../../../../redux/slices/userSlice";
import Tooltip from "../../../../components/UI/Tooltip/Tooltip";
import { GoComment } from "react-icons/go";
import { useSelector } from "react-redux";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Bottom = ({ poll }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const userData = useSelector(selectUser);
  const hasVoted = checkHasVoted({ poll, userData });
  const commentsCount = poll?.comments.length || 0;

  const handleVoteButtonClick = () => {
    const pollCopy = poll;
    if (hasVoted) {
      console.log("pollCopy enter: ", pollCopy);
      const removeParticipation = pollCopy.participants.filter((participant) => participant.user !== userData.uid);
      console.log("removeParticipation: ", removeParticipation);
      const options = pollCopy.options.map((option) => {
        const voters = option.voters.filter((voter) => voter.user !== userData.uid);

// Need to update the option and remove the user
// Need to update the vote number

      });
      console.log("options: ", options);
    }
  };

  return (
    <div className={styles.bottom}>
      <div className={styles.left}>
        <div className={styles.iconContainer}>
          <Tooltip tip={"Comments"}>
            <GoComment className={styles.commentsIcon} />
          </Tooltip>
          <div className={styles.count}>{commentsCount}</div>
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.button}>Results</button>
        <button className={styles.button} onClick={handleVoteButtonClick}>
          {hasVoted ? "Cancel Vote" : "Vote"}
        </button>
      </div>
    </div>
  );
};

export default Bottom;
