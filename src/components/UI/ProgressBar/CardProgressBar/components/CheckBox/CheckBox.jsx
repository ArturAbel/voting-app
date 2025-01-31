import lightStyles from "./lightStyles.module.css";

const CheckBox = () => {
  return (
    <label className="container">
      <input type="checkbox" checked="checked" />
      <div className="checkmark"></div>
    </label>
  );
};

export default CheckBox;
