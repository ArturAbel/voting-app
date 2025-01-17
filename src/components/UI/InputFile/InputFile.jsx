import styles from "./InputFile.module.css";

const InputFile = ({ setProfileImage }) => {
  const handleChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        placeholder={"Profile image"}
        className={styles.input}
        onChange={handleChange}
        name={"profileImage"}
        type={"file"}
      />
    </div>
  );
};

export default InputFile;
