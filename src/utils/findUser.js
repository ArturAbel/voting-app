const findUser = (users, email) => {
  const user = users.find((user) => user.email === email);
  return user;
};

export default findUser;
