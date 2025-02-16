export function checkHasVoted({ poll, userData }) {
  if (poll && userData) {
    const hasVoted = poll.participants.find((participant) => participant.user.includes(userData.uid));
    return hasVoted ? true : false;
  }
  return false;
}

export function findVotedOption({ voters, userData }) {
  if (voters && userData) {
    const usersArray = voters.map((value) => value.user);
    return usersArray.includes(userData.uid);
  }
  return false;
}
