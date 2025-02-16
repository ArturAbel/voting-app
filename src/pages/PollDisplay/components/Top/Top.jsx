import PollCardChip from "../../../../components/UI/Chips/PollCardChip/PollCardChip";
import { setCapitalSentence } from "../../../../utils/content/text";
import { useThemeStyles } from "../../../../hooks/useThemeStyles";
import { CHIP } from "../../../../constants/data";
import { useNavigate } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import Creator from "./Creator/Creator";

import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const Top = ({ poll }) => {
  const styles = useThemeStyles(lightStyles, darkStyles);
  const navigate = useNavigate();

  //   TODO:Extract and usememo
  const verbalizeToDate = () => {
    const numberOfDays = new Date(poll.closeAt) - new Date();
    return numberOfDays <= 0 ? "Expired" : `${Math.floor(numberOfDays / (1000 * 60 * 60 * 24))} days left`;
  };

  const handleClosePoll = () => {
    navigate("..");
  };

  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <div className={styles.chips}>
          <PollCardChip text={setCapitalSentence(poll.visibility)} type={CHIP.visibility} tip={"Poll Visibility"} />
          <PollCardChip text={verbalizeToDate()} type={CHIP.createdAt} tip={"Vote Days Left"} />
        </div>
        <VscClose className={styles.closeButton} onClick={handleClosePoll} />
      </div>

      <div className={styles.creator}>
        <Creator poll={poll} />
      </div>
    </div>
  );
};

export default Top;
