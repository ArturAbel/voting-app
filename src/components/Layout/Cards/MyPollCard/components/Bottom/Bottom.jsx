import PollCardChip from "../../../../../UI/Chips/PollCardChip/PollCardChip";
import { checkIfPollExpired } from "../../../../../../utils/content/text";
import { CHIP } from "../../../../../../constants/data";
import { GoComment } from "react-icons/go";

import styles from "./styles.module.css";

const Bottom = ({ poll }) => {
  const commentsCount = poll.comments.length;

  return (
    <div className={styles.bottom}>
      <div className={styles.commentContainer}>
        <GoComment />
        <div className={styles.commentCount}>{commentsCount || 0}</div>
      </div>
      <div className={styles.chips}>
        <PollCardChip text={poll.visibility} type={CHIP.visibility} />
        <PollCardChip text={checkIfPollExpired(poll.closeAt)} type={CHIP.status} />
      </div>
    </div>
  );
};

export default Bottom;
