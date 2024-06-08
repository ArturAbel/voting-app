export const updateCandidatesVotes = (users, candidates) => {
  const filteredVoters = filterVoters(users);
  const votedCandidateArray = createVotesArray(filteredVoters);

  //   Create an object of amount of votes for each candidate
  let object = {};
  votedCandidateArray.map((item) => {
    if (object[item]) {
      object[item]++;
    } else {
      object[item] = 1;
    }
  });

  //Update the total votes of the candidate
  const updatedVoteScore = candidates.map((candidate) => {
    candidate.totalVotes = object[candidate.fullName];
    return candidate;
  });
  return updatedVoteScore;
};
// Filter all voters with true
export const filterVoters = (users) => {
  return users.filter((user) => user.isVoted === true);
};
// Creates Array
const createVotesArray = (voters) => {
  return voters.map((voter) => voter.candidate);
};
