import styles from "./styles.module.css";

const CardProgressBar = ({ votes, maxVotes, percent }) => {
  return (
    <progress className={styles.progress} value={votes} max={maxVotes}>
      {percent}
    </progress>
  );
};

export default CardProgressBar;
