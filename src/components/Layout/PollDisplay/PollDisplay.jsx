import { VscClose } from "react-icons/vsc";
import Dates from "./components/Dates/Dates";
import Creator from "./components/Creator/Creator";
import { countPercentage, sumVotes } from "../../../utils/content/math";

import lightStyles from "./lightStyles.module.css";
import CardProgressBar from "../../UI/ProgressBar/CardProgressBar/CardProgressBar";

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
        <div className={lightStyles.closeContainer}>
          <VscClose className={lightStyles.closeButton} onClick={handleClosePoll} />
        </div>
        <div className={lightStyles.title}>{selectedPoll.title}</div>
        {/* Dates with popup */}

        <div className={lightStyles.dates}>
          <Creator selectedPoll={selectedPoll} />
          <Dates selectedPoll={selectedPoll} />
        </div>

        <div className={lightStyles.options}>
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
      </div>

      {/* Comment Container */}
    </div>
  );
};

export default PollDisplay;
