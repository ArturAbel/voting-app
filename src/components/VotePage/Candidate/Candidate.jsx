import { useThemeContext } from "../../../context/ThemeContext";
import { setUserVote } from "../../../utils/setUserVote";
import { likeIcon } from "../../../utils/variables";
import { useEffect } from "react";

import "./Candidate.css";

export const Candidate = ({
  id,
  fullName,
  img,
  totalVotes,
  agenda,
  pronouns,
  user,
  selectedCandidate,
  setSelectedCandidate,
}) => {
  const { darkTheme } = useThemeContext();

  const handleSetUserVote = () => {
    setUserVote(fullName, user);
    const selected = user.candidate;
    setSelectedCandidate(selected);
  };

  useEffect(() => {}, [user.candidate]);

  return (
    <div
      className={`candidate-section ${
        fullName === selectedCandidate ? "selectedCandidate" : ""
      }`}
    >
      <div className={`candidate-container item-${id}`}>
        <img className="candidate-image" src={img} alt={fullName} />
        <span className={`count ${darkTheme ? "numberDark" : ""}`}>
          {totalVotes}
        </span>
        <div className="candidate-card">
          <div className={`face back ${darkTheme ? "cardDark" : ""}`}>
            <div className="content">
              <p className="pronounce">{pronouns}</p>
              <p className="agenda">{agenda}</p>
            </div>
          </div>
          <div className="face front">
            <h4 className="candidate-name">{fullName}</h4>
          </div>
        </div>
      </div>
      <div className={`like-icon item-${id}`}>
        <img
          className={darkTheme ? "candidatesDark" : ""}
          onClick={handleSetUserVote}
          src={likeIcon}
          alt="like"
        />
      </div>
    </div>
  );
};
