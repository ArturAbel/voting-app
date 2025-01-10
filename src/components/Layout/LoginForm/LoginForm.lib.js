export function getFeedbackMessage(status) {
  if (!status.isValid) {
    const needsLowerCase = !status.containsLowercaseLetter;
    const needsUpperCase = !status.containsUppercaseLetter;
    const needsNumber = !status.containsNumericCharacter;
    let feedbackMessage = "Password must include ";
    if (needsLowerCase) feedbackMessage += " a lowercase letter";
    if (needsNumber) feedbackMessage += " a number";
    if (needsUpperCase) feedbackMessage += " an uppercase letter";
    feedbackMessage = feedbackMessage.replace(/\b(a|an)\b(?![\s\S]*\b(a|an)\b)/, "and");
    return feedbackMessage;
  }
  return null;
}
