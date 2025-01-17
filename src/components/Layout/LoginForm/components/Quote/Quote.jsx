import styles from "./Quote.module.css";

const Quote = ({ quote }) => {
  return (
    <div className={styles.quoteContainer}>
      <p className={styles.quote}>{quote}</p>
      <span> — Some Really Smart Person</span>
    </div>
  );
};

export default Quote;
