const getAbilities = () => {
  return fetch("https://pokeapi.co/api/v2/ability/?limit=12");
};

const getTypes = () => {
  return fetch("https://pokeapi.co/api/v2/type/?limit=12");
};

const getSinglePokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
};

const getColors = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon-color/?limit=12");
};

const getDatafromURL = (url) => {
  return fetch(url);
};

export { getAbilities, getTypes, getColors, getSinglePokemon, getDatafromURL };
