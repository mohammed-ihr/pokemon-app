const setUserToLocalStorage = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

const getUserFromLocalStorage = () => {
  const user = window.localStorage.getItem("user");
  if (user) return JSON.parse(user);
  else return null;
};

export { setUserToLocalStorage, getUserFromLocalStorage };
