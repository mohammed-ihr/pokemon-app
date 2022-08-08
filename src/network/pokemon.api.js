const getAbilities = () => {
  return fetch("https://pokeapi.co/api/v2/ability/?limit=12");
};

const getTypes = () => {
  return fetch("https://pokeapi.co/api/v2/type/?limit=12");
};

const getSinglePokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
};

const getForms = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon-form/?limit=12");
};

const getDatafromURL = (url) => {
  return fetch(url);
};

export { getAbilities, getTypes, getForms, getSinglePokemon, getDatafromURL };
