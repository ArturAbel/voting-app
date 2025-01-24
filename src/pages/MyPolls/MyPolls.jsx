import NewPollCard from "../../components/layout/Cards/NewPollCard/NewPollCard";
import MyPollCard from "../../components/layout/Cards/MyPollCard/MyPollCard";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import Filter from "../../components/layout/Filter/Filter";

import utilStyles from "../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

// MockData
import polls from "./mock.json";
import { useState } from "react";

const MyPolls = () => {
  const [displayedPolls, setDisplayedPolls] = useState(polls);
  const styles = useThemeStyles(lightStyles, darkStyles);
  return (
    <>
      <Filter polls={polls} setDisplayedPolls={setDisplayedPolls} />
      <section className={`${utilStyles.grid} ${utilStyles.scroll} ${styles.section}`}>
        <NewPollCard />
        {displayedPolls &&
          displayedPolls.length > 0 &&
          displayedPolls.map((poll) => <MyPollCard key={poll.pollId} poll={poll} />)}
      </section>
    </>
  );
};

export default MyPolls;
