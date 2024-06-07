import "./Candidate.css";

export const Candidate = ({ id, fullName, img, totalVotes, agenda }) => {
  return (
    <>
      <div className="Candidate">
        <div className={`candidate-container item-${id}`}>
          <img className="candidate-image" src={img} alt={fullName} />
          <span className="count">{totalVotes}</span>
          <div className="card">
            <div className="face back">
              <div className="content">
                <p className="desc">{agenda}</p>
              </div>
            </div>
            <div className="face front">
              <h4 className="candidate-name">{fullName}</h4>
            </div>
          </div>
        </div>
        <div className={`like-icon item-${id}`}>
          <img src="../../../assets/images/icon/like.png" alt="like" />
        </div>
      </div>
    </>
  );
};
