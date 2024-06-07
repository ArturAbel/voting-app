import { useState, useEffect } from "react";
import { updateCandidatesVotes, filterVoters } from "../../utils/countVotes";
import { Candidate } from "./Candidate/Candidate";
import electionCandidates from "../../data/data";
import "./VotePage.css";

export const VotePage = ({ users, user }) => {
  const [candidates, setCandidates] = useState(electionCandidates);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const updatedCandidates = updateCandidatesVotes(users, candidates);
    setTotalVotes(filterVoters(users).length);
    setCandidates(updatedCandidates);
  }, [users]);

  return (
    <section className="candidates-section">
      <div className="candidates-container">
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} {...candidate} />
        ))}
      </div>
    </section>
  );
};
