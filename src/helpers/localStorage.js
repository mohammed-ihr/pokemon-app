const setUserToLocalStorage = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
};

const setPokemonToLocalStorage = (pokemon) => {
  window.localStorage.setItem("pokemon", JSON.stringify(pokemon));
};

const setPokemonFilterToLocalStorage = (pokemonFilter) => {
  window.localStorage.setItem("pokemonFilter", JSON.stringify(pokemonFilter));
};

const setUserInfoErrorToLocalStorage = (userInfoError) => {
  window.localStorage.setItem("userInfoError", JSON.stringify(userInfoError));
};

const getUserFromLocalStorage = () => {
  const user = window.localStorage.getItem("user");
  if (user) return JSON.parse(user);
  else return null;
};

const getPokemonFromLocalStorage = () => {
  const pokemon = window.localStorage.getItem("pokemon");
  if (pokemon) return JSON.parse(pokemon);
  else return null;
};

const getPokemonFilterFromLocalStorage = () => {
  const pokemonFilter = window.localStorage.getItem("pokemonFilter");
  if (pokemonFilter) return JSON.parse(pokemonFilter);
  else return null;
};
const getUserInfoErrorFromLocalStorage = () => {
  const userInfoError = window.localStorage.getItem("userInfoError");
  if (userInfoError) return JSON.parse(userInfoError);
  else return null;
};

export {
  setUserToLocalStorage,
  setUserInfoErrorToLocalStorage,
  setPokemonToLocalStorage,
  setPokemonFilterToLocalStorage,
  getUserFromLocalStorage,
  getUserInfoErrorFromLocalStorage,
  getPokemonFromLocalStorage,
  getPokemonFilterFromLocalStorage
};
