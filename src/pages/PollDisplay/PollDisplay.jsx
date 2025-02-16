import Overlay from "../../components/layout/Overlay/Overlay";
import { useLoaderData } from "react-router-dom";
import Middle from "./components/Middle/Middle";
import Bottom from "./components/Bottom/Bottom";
import Top from "./components/Top/Top";
import { motion } from "framer-motion";

import lightStyles from "./lightStyles.module.css";

const PollDisplay = () => {
  const { poll } = useLoaderData();

  // TODO: Add spinner
  if (!poll) return <div>Loading...</div>;

  return (
    <Overlay>
      <motion.div
        animate={{ scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.7, stiffness: 150 } }}
        className={lightStyles.section}
        initial={{ scale: 0.6 }}
      >
        <div className={lightStyles.card}>
          <Top poll={poll} />
          <Middle poll={poll} />
          <Bottom poll={poll} />
        </div>

        {/* Comment Container */}
      </motion.div>
    </Overlay>
  );
};

export default PollDisplay;
