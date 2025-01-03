import styles from "./Input.module.css";

export const Input = ({ type, name, placeholder, value, setValue }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <input
      onChange={handleInputChange}
      placeholder={placeholder}
      className={styles.input}
      value={value}
      type={type}
      name={name}
      required
    />
  );
};
