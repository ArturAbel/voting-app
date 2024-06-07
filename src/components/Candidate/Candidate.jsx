import "./Candidate.css";

export const Candidate = ({ fullName, img }) => {
  return (
    <div className="candidate-card">
      <div className="candidate-counter"></div>
      <div className="candidate-image-container">
        <img src={img} alt={fullName} />
      </div>
      <h4 className="candidate-name">{fullName}</h4>
    </div>
  );
};
