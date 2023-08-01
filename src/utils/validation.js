export const isEmailValid = (email) => {
  return /@/.test(email);
};

export const isPasswordValid = (password) => {
  return password.length >= 8;
};
