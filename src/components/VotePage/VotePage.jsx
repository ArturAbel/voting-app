import { Candidate } from "../Candidate/Candidate";
import electionCandidates from "../../data/data";
import { useState } from "react";
import "./VotePage.css";

export const VotePage = ({users, user}) => {
  const [candidates, setCandidates] = useState(electionCandidates);
  const [date, setDate] = useState(new Date());




  return (
    <section className="vote-section">
      <div className="vote-display">
        <h3 className="vote-display-title"> honor society elections 2024</h3>
        <p className="vote-display-text">Date: {date.toDateString()}</p>
        <p className="vote-display-text">total voted:</p>
        <button className="vote-display-button">vote</button>
      </div>
      <div className="vote-candidates-container">
        {candidates.map((candidate) => {
          return <Candidate key={candidate.id} {...candidate} />;
        })}
      </div>
    </section>
  );
};
