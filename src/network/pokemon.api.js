const getAbilities = () => {
  return fetch("https://pokeapi.co/api/v2/ability/?limit=12");
};

export { getAbilities };
