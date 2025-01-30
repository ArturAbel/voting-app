import lightStyles from "./lightStyles.module.css";

const Dates = ({ selectedPoll }) => {
  const fromDate = new Date(selectedPoll.createdAt);
  const toDate = new Date(selectedPoll.closeAt);
  const localFromDate = fromDate.toLocaleDateString();
  const localToDate = toDate.toLocaleDateString();

  return (
    <div className={lightStyles.dates}>
      <div className={lightStyles.from}>Created: {localFromDate}</div>
      <div className={lightStyles.to}>Ends: {localToDate}</div>
    </div>
  );
};

export default Dates;
