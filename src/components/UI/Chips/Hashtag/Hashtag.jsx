import lightStyles from "./lightStyles.module.css";

const Hashtag = ({ tag }) => {
  return (
    <div className={lightStyles.hashtag}>
      <span className={lightStyles.hash}>#</span>
      {tag}
    </div>
  );
};

export default Hashtag;
