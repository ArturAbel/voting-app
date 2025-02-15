import { useThemeStyles } from "../../../../../hooks/useThemeStyles";
import { checkHasVoted } from "../../../../../utils/votes/checkVote";
import { selectUser } from "../../../../../redux/slices/userSlice";
import Tooltip from "../../../../UI/Tooltip/Tooltip";
import { GoComment } from "react-icons/go";
import { useSelector } from "react-redux";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Bottom = ({ selectedPoll }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const userData = useSelector(selectUser);
  const hasVoted = checkHasVoted({ selectedPoll, userData });
  const commentsCount = selectedPoll?.comments.length || 0;

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
        <button className={styles.button}>{hasVoted ? "Cancel Vote" : "Vote"}</button>
      </div>
    </div>
  );
};

export default Bottom;
