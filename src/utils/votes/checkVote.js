export function checkHasVoted({ selectedPoll, userData }) {
  if (selectedPoll && userData) {
    const hasVoted = selectedPoll.participants.find((participant) => participant.user.includes(userData.uid));
    return hasVoted ? true : false;
  }
  return false;
}

export function findVotedOption({ voters, userData }) {
  if (voters && userData) {
    return voters.includes(userData.uid);
  }
  return false;
}
