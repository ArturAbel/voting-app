import PollCardChip from "../../../../UI/Chips/PollCardChip/PollCardChip";
import { CHIP } from "../../../../../constants/data";

import lightStyles from "./lightStyles.module.css";

const Dates = ({ selectedPoll }) => {
  const fromDate = new Date(selectedPoll.createdAt);
  const toDate = new Date(selectedPoll.closeAt);
  const localFromDate = fromDate.toLocaleDateString();
  const localToDate = toDate.toLocaleDateString();

  return (
    <div className={lightStyles.dates}>
      <PollCardChip text={localFromDate} type={CHIP.createdAt} />
      <PollCardChip text={localToDate} type={CHIP.createdAt} />
    </div>
  );
};

export default Dates;
