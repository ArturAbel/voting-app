import { defaultProfileImage } from "../../../../../constants/data";
import lightStyles from "./lightStyles.module.css";

const Creator = ({ selectedPoll }) => {
  if (!selectedPoll) return <div>Loading...</div>;

  return (
    <div className={lightStyles.createdContainer}>
      <div className={lightStyles.createdImageContainer}>
        <img
          src={selectedPoll.createdByImage ?? defaultProfileImage}
          className={lightStyles.createdImage}
          alt={selectedPoll.pollId}
        />
      </div>
      <div className={lightStyles.createdName}>{selectedPoll.createdBy}</div>
    </div>
  );
};

export default Creator;
