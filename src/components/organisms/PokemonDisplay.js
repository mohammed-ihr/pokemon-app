import { Typography } from "@mui/material";
import { useContext } from "react";
import PokemonContext from "../../state/PokemonContext";
import "./styles/pokemonDisplay.styles.css";

const PokemonDisplay = () => {
  const { pokemon } = useContext(PokemonContext);
  const { selectedPokemon } = pokemon;

  return (
    <div className="pokemon-display">
      <div className="pokemon-container">
        <Typography variant="h6" component="div" className="heading">
          {selectedPokemon.name.toUpperCase()}
        </Typography>
        <div className="picture">
          <img
            height="200px"
            src={selectedPokemon.sprites.other.dream_world.front_default}
            alt="new"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDisplay;
