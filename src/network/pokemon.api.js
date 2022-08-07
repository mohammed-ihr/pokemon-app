const getAbilities = () => {
  return fetch("https://pokeapi.co/api/v2/ability/").then((res) => res.json());
};

export { getAbilities };
