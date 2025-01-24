export function setCapitalSentence(string) {
  if (string) {
    const firstLetter = string.charAt(0).toUpperCase();
    const capitalSentence = firstLetter + string.slice(1).toLowerCase();
    return capitalSentence;
  }
  return null;
}

export const checkIfPollExpired = (poll) => {
  if (poll) {
    const today = new Date();
    const expiryDate = new Date(poll);
    return expiryDate - today >= 0 ? "Open" : "Expired";
  }
  return null;
};
