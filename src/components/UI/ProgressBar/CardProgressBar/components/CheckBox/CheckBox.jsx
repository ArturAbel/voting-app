import lightStyles from "./lightStyles.module.css";

const CheckBox = () => {
  return (
    <label className={lightStyles.container}>
      <input type="checkbox" />
      <div className={lightStyles.checkmark}></div>
    </label>
  );
};

export default CheckBox;
