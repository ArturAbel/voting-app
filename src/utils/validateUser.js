const validateUser = (user, password, email) => {
  if (!user) {
    return false;
  }
  if (user.email === email && user.password === password) {
    return true;
  }
  return false;
};

export default validateUser;
