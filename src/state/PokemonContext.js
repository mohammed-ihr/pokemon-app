import { createContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({
    abilities: {results:[]},
    types: {results:[]},
    colors: {results:[]},
    pokemons: {},
    selectedPokemon: {},
  });

  const actions = {
    setAbilities: (abilities) =>
      setPokemon((prevState) => ({ ...prevState, abilities })),
    setTypes: (types) => setPokemon((prevState) => ({ ...prevState, types })),
    setColors: (colors) =>
      setPokemon((prevState) => ({ ...prevState, colors })),
    setPokemons: (pokemons) =>
      setPokemon((prevState) => ({ ...prevState, pokemons })),
    setSelectedPokemon: (selectedPokemon) =>
      setPokemon((prevState) => ({ ...prevState, selectedPokemon })),
  };

  return (
    <PokemonContext.Provider value={{ pokemon, actions }}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;
