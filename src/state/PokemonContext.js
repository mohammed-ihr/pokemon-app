import { createContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({
    abilities: { results: [] },
    types: { results: [] },
    colors: { results: [] },
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
    selectedColor: "",
  });

  const actions = {
    // ==============================================================================
    // actions related to updating pokemon data

    setAbilities: (abilities) =>
      setPokemon((prevState) => ({ ...prevState, abilities })),
    setTypes: (types) => setPokemon((prevState) => ({ ...prevState, types })),
    setColors: (colors) =>
      setPokemon((prevState) => ({ ...prevState, colors })),
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
    setSelectedColor: (selectedColor) =>
      setFilterInput((prevState) => ({ ...prevState, selectedColor })),

    // ==============================================================================
  };

  return (
    <PokemonContext.Provider value={{ pokemon, filterInput, actions }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
