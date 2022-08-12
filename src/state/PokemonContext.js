import { createContext, useState, useEffect } from "react";
import {
  getPokemonFilterFromLocalStorage,
  getPokemonFromLocalStorage,
  setPokemonFilterToLocalStorage,
  setPokemonToLocalStorage,
} from "../helpers/localStorage";

const PokemonContext = createContext();

const initialPokemonState = {
  abilities: [],
  types: [],
  pokemons: [],

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
};

const initialFilterInput = {
  searchKeyword: "",
  selectedTab: 0,
  selectedAbility: "",
  currentAbilityPage: 1,
  selectedType: "",
  currentTypePage: 1,
  selectedIndexInAutoComplete: 0,
};

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState(
    getPokemonFromLocalStorage() ?? initialPokemonState
  );

  const [filterInput, setFilterInput] = useState(
    getPokemonFilterFromLocalStorage() ?? initialFilterInput
  );

  const actions = {
    // ==============================================================================
    // actions related to updating pokemon data
    // ==============================================================================

    setAbilities: (abilities) =>
      setPokemon((prevState) => ({ ...prevState, abilities })),

    setTypes: (types) => setPokemon((prevState) => ({ ...prevState, types })),
    setPokemons: (pokemons) =>
      setPokemon((prevState) => ({ ...prevState, pokemons })),
    setSelectedPokemon: (selectedPokemon) =>
      setPokemon((prevState) => ({ ...prevState, selectedPokemon })),

    // ==============================================================================
    //  actions related to updating filter criteria
    // ==============================================================================

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

    setSelectedIndexInAutoComplete: (index) =>
      setFilterInput((prevState) => ({
        ...prevState,
        selectedIndexInAutoComplete: index,
      })),

    // ==============================================================================
  };

  // useEffect(() => {
  //   if (filterInput.selectedAbility !== "") {
  //     actions.setSelectedType("");
  //     actions.setSearchKeyword("");
  //   }
  //   // eslint-disable-next-line
  // }, [filterInput.selectedAbility]);

  // useEffect(() => {
  //   if (filterInput.selectedType !== "") {
  //     actions.setSelectedAbility("");
  //     actions.setSearchKeyword("");
  //   }
  //   // eslint-disable-next-line
  // }, [filterInput.selectedType]);

  useEffect(() => {
    setPokemonToLocalStorage(pokemon);
  }, [pokemon]);

  useEffect(() => {
    setPokemonFilterToLocalStorage(filterInput);
  }, [filterInput]);

  return (
    <PokemonContext.Provider value={{ pokemon, filterInput, actions }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
