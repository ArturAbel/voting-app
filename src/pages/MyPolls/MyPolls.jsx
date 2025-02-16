import NewPollCard from "../../components/layout/Cards/NewPollCard/NewPollCard";
import MyPollCard from "../../components/layout/Cards/MyPollCard/MyPollCard";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import Filter from "../../components/layout/Filter/Filter";
import { useState } from "react";

import utilStyles from "../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const MyPolls = () => {
  const [filteredPolls, setFilteredPolls] = useState(null);
  const styles = useThemeStyles(lightStyles, darkStyles);
  const { polls } = useLoaderData();
  const navigation = useNavigate();

  const displayedPolls = filteredPolls !== null ? filteredPolls : polls;

  if (navigation.state === "loading") return <div>Loading...</div>;
  if (!polls) return <div>No available polls</div>;

  return (
    <>
      <Filter polls={polls} setFilteredPolls={setFilteredPolls} />
      <section className={`${utilStyles.grid} ${utilStyles.scroll} ${styles.section}`}>
        <NewPollCard />
        {displayedPolls &&
          displayedPolls.length > 0 &&
          displayedPolls.map((poll) => <MyPollCard key={poll.id} poll={poll} />)}
      </section>
      <Outlet />
    </>
  );
};

export default MyPolls;
