import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({
    abilities: [],
    types: [],
    pokemons: [
      {
        name: "hitmonlee",
        url: "https://pokeapi.co/api/v2/pokemon/106/",
      },
      {
        name: "zxxnlee",
        url: "https://pokeapi.co/api/v2/pokemon/106/",
      },
      {
        name: "lokonlee",
        url: "https://pokeapi.co/api/v2/pokemon/106/",
      },
      {
        name: "jjnnj",
        url: "https://pokeapi.co/api/v2/pokemon/106/",
      },
      {
        name: "jjjjj",
        url: "https://pokeapi.co/api/v2/pokemon/106/",
      },
      {
        name: "jjjs",
        url: "https://pokeapi.co/api/v2/pokemon/106/",
      },
    ],

    selectedPokemon: {
      name: "Pikachu",
      sprites: {
        other: {
          dream_world: {
            front_default: "",
          },
          "official-artwork": {
            front_default: "",
          },
        },
      },
      abilities: [],
      types: [],
      forms: [],
    },
  });

  const [filterInput, setFilterInput] = useState({
    searchKeyword: "",
    selectedTab: 0,
    selectedAbility: "",
    currentAbilityPage: 1,
    selectedType: "",
    currentTypePage: 1,
  });

  const actions = {
    // ==============================================================================
    // actions related to updating pokemon data

    setAbilities: (abilities) =>
      setPokemon((prevState) => ({ ...prevState, abilities })),

    setTypes: (types) => setPokemon((prevState) => ({ ...prevState, types })),
    setPokemons: (pokemons) =>
      setPokemon((prevState) => ({ ...prevState, pokemons })),
    setSelectedPokemon: (selectedPokemon) =>
      setPokemon((prevState) => ({ ...prevState, selectedPokemon })),

    // ==============================================================================
    //  actions related to updating filter criteria

    setSearchKeyword: (searchKeyword) =>
      setFilterInput((prevState) => ({ ...prevState, searchKeyword })),
    setSelectedTab: (selectedTab) =>
      setFilterInput((prevState) => ({ ...prevState, selectedTab })),

    setSelectedAbility: (selectedAbility) =>
      setFilterInput((prevState) => ({ ...prevState, selectedAbility })),
    setCurrentAbilityPage: (pageNo) =>
      setFilterInput((prevState) => ({
        ...prevState,
        currentAbilityPage: pageNo,
      })),

    setSelectedType: (selectedType) =>
      setFilterInput((prevState) => ({ ...prevState, selectedType })),
    setCurrentTypePage: (pageNo) =>
      setFilterInput((prevState) => ({
        ...prevState,
        currentTypePage: pageNo,
      })),

    // ==============================================================================
  };
  useEffect(() => {
    console.log("hello ", filterInput);
  }, [filterInput]);

  useEffect(() => {
    if (filterInput.selectedAbility !== "") {
      actions.setSelectedType("");
      actions.setSearchKeyword("");
    }
    // eslint-disable-next-line
  }, [filterInput.selectedAbility]);

  useEffect(() => {
    if (filterInput.selectedType !== "") {
      actions.setSelectedAbility("");
      actions.setSearchKeyword("");
    }
    // eslint-disable-next-line
  }, [filterInput.selectedType]);

  return (
    <PokemonContext.Provider value={{ pokemon, filterInput, actions }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
