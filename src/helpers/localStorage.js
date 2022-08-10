const setUserToLocalStorage = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

const setUserInfoErrorToLocalStorage = (userInfoError) => {
  window.localStorage.setItem("userInfoError", JSON.stringify(userInfoError));
};

const getUserFromLocalStorage = () => {
  const user = window.localStorage.getItem("user");
  if (user) return JSON.parse(user);
  else return null;
};
const getUserInfoErrorFromLocalStorage = () => {
  const userInfoError = window.localStorage.getItem("userInfoError");
  if (userInfoError) return JSON.parse(userInfoError);
  else return null;
};

export {
  setUserToLocalStorage,
  getUserFromLocalStorage,
  setUserInfoErrorToLocalStorage,
  getUserInfoErrorFromLocalStorage,
};
