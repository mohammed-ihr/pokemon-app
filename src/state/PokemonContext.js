import { createContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({
    abilities: { results: [] },
    types: { results: [] },
    forms: { results: [] },
    pokemons: {},
    selectedPokemon: {
      name: "Pikachu",
      sprites: {
        other: {
          dream_world: {
            front_default: "",
          },
        },
      },
    },
  });

  const [filterInput, setFilterInput] = useState({
    searchKeyword: "",
    selectedTab: 0,
    selectedAbility: "",
    selectedType: "",
    selectedForm: "",
  });

  const actions = {
    // ==============================================================================
    // actions related to updating pokemon data

    setAbilities: (abilities) =>
      setPokemon((prevState) => ({ ...prevState, abilities })),
    setTypes: (types) => setPokemon((prevState) => ({ ...prevState, types })),
    setForms: (forms) =>
      setPokemon((prevState) => ({ ...prevState, forms })),
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
    setSelectedType: (selectedType) =>
      setFilterInput((prevState) => ({ ...prevState, selectedType })),
    setSelectedForm: (selectedForm) =>
      setFilterInput((prevState) => ({ ...prevState, selectedForm })),

    // ==============================================================================
  };

  return (
    <PokemonContext.Provider value={{ pokemon, filterInput, actions }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
