export function getFeedbackMessage(status) {
  if (!status.isValid) {
    const needsLowerCase = !status.containsLowercaseLetter;
    const needsUpperCase = !status.containsUppercaseLetter;
    const needsNumber = !status.containsNumericCharacter;
    let feedbackMessage = "Password must include ";
    if (needsLowerCase) feedbackMessage += " a lowercase letter";
    if (needsUpperCase) feedbackMessage += " an uppercase letter";
    if (needsNumber) feedbackMessage += " a number";
    feedbackMessage = feedbackMessage.replace(/.*\b(a|an)\b(?!.*\b(a|an)\b)/, (match) =>
      match.replace(/\b( a| an)\b/, " and")
    );
    return feedbackMessage;
  }
  return null;
}
