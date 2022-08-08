import { Autocomplete, Chip, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { getDatafromURL } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";
import "./styles/pokemonDisplay.styles.css";

const PokemonDisplay = () => {
  const { pokemon, actions } = useContext(PokemonContext);
  const { selectedPokemon } = pokemon;

  const handleDropDownChange = async (url) => {
    const res = await getDatafromURL(url);
    const pokemon = await res.json();
    actions.setSelectedPokemon(pokemon);
  };

  const getImage = () => {
    const dream_world = selectedPokemon.sprites.other.dream_world.front_default;

    const official =
      selectedPokemon.sprites.other["official-artwork"].front_default;
    if (dream_world) return dream_world;

    return official;
  };

  return (
    <div className="pokemon-display">
      <div className="autocomplete-dropdown">
        <Autocomplete
          fullWidth
          disablePortal
          id="combo-box-demo"
          options={pokemon.pokemons}
          getOptionLabel={(option) => option.name ?? option}
          renderInput={(params) => (
            <TextField {...params} label="Select Pokemon" />
          )}
          onChange={(event, value, reason) => {
            handleDropDownChange(value.url);
          }}
        />
      </div>
      <div className="pokemon-container">
        <Typography variant="h6" component="div" className="heading">
          {selectedPokemon.name.toUpperCase()}
        </Typography>
        <div className="picture">
          <img height="200px" src={getImage()} alt="new" />
        </div>

        <div className="basic-info">
          <div className="column">
            <Typography>Base Experience</Typography>
            <Typography>{selectedPokemon.base_experience}</Typography>
          </div>

          <div className="column">
            <Typography>Height</Typography>
            <Typography>{selectedPokemon.height}</Typography>
          </div>

          <div className="column">
            <Typography>Weight</Typography>
            <Typography>{selectedPokemon.weight}</Typography>
          </div>
        </div>
        <div>
          <div>
            <div className="row">
              <Typography>Abilities: </Typography>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {selectedPokemon.abilities.map((data) => {
                  return (
                    <div className="chip-container">
                      <Chip label={data.ability.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row">
            <Typography>Types: </Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {selectedPokemon.types.map((data) => {
                return (
                  <div className="chip-container">
                    <Chip label={data.type.name} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="row">
            <Typography>Forms: </Typography>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {selectedPokemon.forms.map((data) => {
                return (
                  <div className="chip-container">
                    <Chip label={data.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDisplay;
