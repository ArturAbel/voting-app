import CardProgressBar from "../../UI/ProgressBar/CardProgressBar/CardProgressBar";
import { countPercentage, sumVotes } from "../../../utils/content/math";
import Creator from "./components/Creator/Creator";
import Dates from "./components/Dates/Dates";
import { VscClose } from "react-icons/vsc";
import { GoComment } from "react-icons/go";

import lightStyles from "./lightStyles.module.css";
import { CHIP } from "../../../constants/data";
import PollCardChip from "../../UI/Chips/PollCardChip/PollCardChip";

const PollDisplay = ({ selectedPoll, setSelectedPoll }) => {
  const votesSum = sumVotes(selectedPoll);

  const handleClosePoll = () => {
    setSelectedPoll(null);
  };

  console.log("selectedPoll: ", selectedPoll);

  if (!selectedPoll) return <div>Loading...</div>;

  return (
    <div className={lightStyles.section}>
      <div className={lightStyles.card}>
        {/* Top */}
        {/* Dates with popup */}
        <div className={lightStyles.top}>

<div className={lightStyles.topDiv}>
        <div className={lightStyles.chipContainer}>
            <PollCardChip text={selectedPoll.visibility} type={CHIP.visibility} />
          </div>
            <VscClose className={lightStyles.closeButton} onClick={handleClosePoll} />

</div>

          <div className={lightStyles.dates}>
            <Creator selectedPoll={selectedPoll} />
            <Dates selectedPoll={selectedPoll} />
          </div>
        </div>
        {/*  */}

        {/* Middle */}
        <div className={lightStyles.options}>
          <div className={lightStyles.title}>{selectedPoll.title}</div>
 
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
        {/*  */}

        {/* Bottom */}
        <div className={lightStyles.bottom}>
          <div className={lightStyles.left}>
            <GoComment className={lightStyles.commentsIcon} />
          </div>
          <div className={lightStyles.right}>
            <button className={lightStyles.button}>Results</button>
            <button className={lightStyles.button}>Vote</button>
          </div>
        </div>
      </div>

      {/* Comment Container */}
    </div>
  );
};

export default PollDisplay;
