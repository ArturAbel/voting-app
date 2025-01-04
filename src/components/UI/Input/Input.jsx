import styles from "./Input.module.css";

export const Input = ({ type, name, placeholder, value, setValue, errorMessage }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div className={styles.inputContainer}>
      <input
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        type={type}
        name={name}
        required
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
