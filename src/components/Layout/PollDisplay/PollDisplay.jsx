import Top from "./components/Top/Top";

import lightStyles from "./lightStyles.module.css";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";

const PollDisplay = ({ selectedPoll, setSelectedPoll }) => {
  const handleClosePoll = () => {
    setSelectedPoll(null);
  };

  console.log("selectedPoll: ", selectedPoll);

  if (!selectedPoll) return <div>Loading...</div>;

  return (
    <div className={lightStyles.section}>
      <div className={lightStyles.card}>
        <Top selectedPoll={selectedPoll} handleClosePoll={handleClosePoll} />
        <Middle selectedPoll={selectedPoll} />
        <Bottom />
      </div>

      {/* Comment Container */}
    </div>
  );
};

export default PollDisplay;
