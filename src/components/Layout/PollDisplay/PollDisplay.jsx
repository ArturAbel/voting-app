import { VscClose } from "react-icons/vsc";

import lightStyles from "./lightStyles.module.css";

const PollDisplay = ({ selectedPoll, setSelectedPoll }) => {
  const handleClosePoll = () => {
    setSelectedPoll(null);
  };

  console.log("selectedPoll: ", selectedPoll);

  const fromDate = new Date(selectedPoll.createdAt);
  const toDate = new Date(selectedPoll.closeAt);
  const localFromDate = fromDate.toLocaleDateString();
  const localToDate = toDate.toLocaleDateString();


  return (
    <div className={lightStyles.section}>
      <div className={lightStyles.card}>

        <div className={lightStyles.closeContainer}>
          <VscClose className={lightStyles.closeButton} onClick={handleClosePoll} />
        </div>

        <div className={lightStyles.dates}>
          {/* Dates create chip */}
          <div className={lightStyles.from}>Created: {localFromDate}</div>
          <div className={lightStyles.to}>Ends: {localToDate}</div>
        </div>


        <div className={lightStyles.title}>{selectedPoll.title}</div>


        {/*  */}
        <div className={lightStyles.createdContainer}>
            <div className={lightStyles.createdImageContainer}>
              <img className={lightStyles.createdImage} src={selectedPoll.createdByImage} alt={selectedPoll.pollId} />
            </div>
            <div className={lightStyles.createdName}>{selectedPoll.createdBy}</div>
        </div>

        
        {/*  */}
      </div>

      {/* Comment Container */}
    </div>
  );
};

export default PollDisplay;
