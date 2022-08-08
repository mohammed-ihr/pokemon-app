import { dataLimit } from "../common/constants";

const getAbilities = () => {
  return fetch(`https://pokeapi.co/api/v2/ability/?limit=${dataLimit}`);
};

const getTypes = () => {
  return fetch(`https://pokeapi.co/api/v2/type/?limit=${dataLimit}`);
};

const getSinglePokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
};

const getDatafromURL = (url) => {
  return fetch(url);
};

export { getAbilities, getTypes, getSinglePokemon, getDatafromURL };
