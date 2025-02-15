import lightStyles from "./lightStyles.module.css";

const CheckBox = ({ checked, hasVoted }) => {
  return (
    <label className={lightStyles.container}>
      <input type="checkbox" defaultChecked={checked} disabled={hasVoted} />
      <div className={lightStyles.checkmark}></div>
    </label>
  );
};

export default CheckBox;
