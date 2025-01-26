import NewPollCard from "../../components/layout/Cards/NewPollCard/NewPollCard";
import MyPollCard from "../../components/layout/Cards/MyPollCard/MyPollCard";
import PollDisplay from "../../components/layout/PollDisplay/PollDisplay";
import Overlay from "../../components/layout/Overlay/Overlay";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import Filter from "../../components/layout/Filter/Filter";
import { useState } from "react";

import utilStyles from "../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

// MockData
import polls from "./mock.json";

const MyPolls = () => {
  const [displayedPolls, setDisplayedPolls] = useState(polls);
  const styles = useThemeStyles(lightStyles, darkStyles);
  const [selectedPoll, setSelectedPoll] = useState(null);

  return (
    <>
      <Filter polls={polls} setDisplayedPolls={setDisplayedPolls} />
      <section className={`${utilStyles.grid} ${utilStyles.scroll} ${styles.section}`}>
        <NewPollCard />
        {displayedPolls &&
          displayedPolls.length > 0 &&
          displayedPolls.map((poll) => <MyPollCard key={poll.pollId} poll={poll} setSelectedPoll={setSelectedPoll} />)}
        {selectedPoll && (
          <Overlay>
            <PollDisplay selectedPoll={selectedPoll} setSelectedPoll={setSelectedPoll} />
          </Overlay>
        )}
      </section>
    </>
  );
};

export default MyPolls;
