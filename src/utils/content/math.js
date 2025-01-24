export const sumVotes = (poll) => {
  if (poll) {
    return poll.options.reduce((acc, cur) => acc + cur.votes, 0);
  }
  return null;
};

export const countPercentage = (value, max) => {
  if (value && max) {
    return (value / max) * 100;
  }
  return null;
};
