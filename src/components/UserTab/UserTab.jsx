import "./UserTab.css";

export const UserTab = ({ fullName, email, image, isVoted }) => {
  return (
    <div className="user-tab-div">
      <div className="user-tab-image">
        <img src={image} alt="" />
      </div>
      <div className="user-tab-name">
        <span>{fullName}</span>
      </div>
      <div className="user-tab-email">
        <span>{email}</span>
      </div>
      <div className="user-tab-vote">
        <span className={`${isVoted ? `voted` : `didNot`}`}>
          {isVoted === true ? "Voted" : "Didn't Vote"}
        </span>
      </div>
    </div>
  );
};
