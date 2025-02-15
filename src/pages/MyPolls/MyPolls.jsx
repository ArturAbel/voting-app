import NewPollCard from "../../components/layout/Cards/NewPollCard/NewPollCard";
import MyPollCard from "../../components/layout/Cards/MyPollCard/MyPollCard";
import { fetchMyPolls, selectMyPolls } from "../../redux/thunk/fetchMyPolls";
import PollDisplay from "../../components/layout/PollDisplay/PollDisplay";
import Overlay from "../../components/layout/Overlay/Overlay";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import Filter from "../../components/layout/Filter/Filter";
import { selectUser } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import utilStyles from "../../css/utils.module.css";
import lightStyles from "./lightStyles.module.css";
import darkStyles from "./darkStyles.module.css";

const MyPolls = () => {
  const { polls: myPolls, status, error } = useSelector(selectMyPolls);
  const [filteredPolls, setFilteredPolls] = useState(null);
  const styles = useThemeStyles(lightStyles, darkStyles);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData && status === null) {
      dispatch(fetchMyPolls(userData.uid));
    }
  }, [userData, dispatch, status]);

  const displayedPolls = filteredPolls !== null ? filteredPolls : myPolls;

  if (status === "pending") return <div>Loading...</div>;

  return (
    <>
      <Filter polls={myPolls} setFilteredPolls={setFilteredPolls} />
      <section className={`${utilStyles.grid} ${utilStyles.scroll} ${styles.section}`}>
        <NewPollCard />
        {displayedPolls &&
          displayedPolls.length > 0 &&
          displayedPolls.map((poll) => <MyPollCard key={poll.id} poll={poll} setSelectedPoll={setSelectedPoll} />)}
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
