export const setUserVote = (fullName, user) => {
  if (fullName === user.candidate) {
    user.candidate = "";
    user.isVoted = false;
    return;
  }
  user.candidate = fullName;
  user.isVoted = true;
  return;
};
