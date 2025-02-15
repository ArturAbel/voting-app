import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";
import Top from "./components/Top/Top";
import { motion } from "framer-motion";

import lightStyles from "./lightStyles.module.css";

const PollDisplay = ({ selectedPoll, setSelectedPoll }) => {
  const handleClosePoll = () => {
    setSelectedPoll(null);
  };

  // TODO: Add spinner
  if (!selectedPoll) return <div>Loading...</div>;

  return (
    <motion.div
      animate={{ scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.7, stiffness: 150 } }}
      className={lightStyles.section}
      initial={{ scale: 0.6 }}
    >
      <div className={lightStyles.card}>
        <Top selectedPoll={selectedPoll} handleClosePoll={handleClosePoll} />
        <Middle selectedPoll={selectedPoll} />
        <Bottom selectedPoll={selectedPoll} />
      </div>

      {/* Comment Container */}
    </motion.div>
  );
};

export default PollDisplay;
