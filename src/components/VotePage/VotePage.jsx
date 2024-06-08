import { updateCandidatesVotes } from "../../utils/countVotes";
import { Candidate } from "./Candidate/Candidate";
import electionCandidates from "../../data/data";
import { useState, useEffect } from "react";

import "./VotePage.css";

export const VotePage = ({ users, user }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(user.candidate);
  const [candidates, setCandidates] = useState(electionCandidates);

  useEffect(() => {
    const updatedCandidates = updateCandidatesVotes(users, candidates);
    setCandidates(updatedCandidates);
  }, [users, user.candidate]);

  return (
    <section className="candidates-section">
      <div className="candidates-container">
        {candidates.map((candidate) => (
          <Candidate
            key={candidate.id}
            {...candidate}
            user={user}
            selectedCandidate={selectedCandidate}
            setSelectedCandidate={setSelectedCandidate}
          />
        ))}
      </div>
    </section>
  );
};
