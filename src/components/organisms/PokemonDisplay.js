import {
  Autocomplete,
  Chip,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { getDatafromURL } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";
import "./styles/pokemonDisplay.styles.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PokemonDisplay = () => {
  const { pokemon, filterInput, actions } = useContext(PokemonContext);
  const { selectedPokemon } = pokemon;

  const handleDropDownChange = async (value) => {
    const res = await getDatafromURL(value.url);
    const pokemon = await res.json();
    actions.setSelectedPokemon(pokemon);

    actions.setSelectedIndexInAutoComplete(value.id);
  };

  const getImage = () => {
    const dream_world = selectedPokemon.sprites.other.dream_world.front_default;

    const official =
      selectedPokemon.sprites.other["official-artwork"].front_default;
    if (dream_world) return dream_world;

    return official;
  };

  // console.log('dddddddd ', pokemon.pokemons[filterInput.selectedIndexInAutoComplete]);
  // console.log('dddddddd== ',pokemon.pokemons[filterInput.selectedIndexInAutoComplete] === pokemon.pokemons[0]);

  return (
    <div className="pokemon-display">
      <div className="pokemon-container">
        {pokemon.pokemons.length > 0 && (
          <div>
            <div className="autocomplete-dropdown">
              <IconButton
                disabled={filterInput.selectedIndexInAutoComplete === 0}
                onClick={() => {
                  handleDropDownChange(
                    pokemon.pokemons[
                      filterInput.selectedIndexInAutoComplete - 1
                    ]
                  );
                }}
                size="small"
              >
                <NavigateBeforeIcon className="nav-icon" />
              </IconButton>
              <Autocomplete
                fullWidth
                disablePortal
                value={
                  pokemon.pokemons[filterInput.selectedIndexInAutoComplete]
                }
                id="combo-box-demo"
                options={pokemon.pokemons}
                getOptionLabel={(option) => option.name.toUpperCase()}
                renderInput={(params) => (
                  <TextField {...params} label="Select Pokemon" />
                )}
                onChange={(event, value, reason) => {
                  handleDropDownChange(value);
                }}
              />

              <IconButton
                disabled={
                  filterInput.selectedIndexInAutoComplete >=
                  pokemon.pokemons.length - 1
                }
                onClick={() => {
                  handleDropDownChange(
                    pokemon.pokemons[
                      filterInput.selectedIndexInAutoComplete + 1
                    ]
                  );
                }}
                size="small"
              >
                <NavigateNextIcon disabled className="nav-icon" />
              </IconButton>
            </div>
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

            <div className='catch-btn-container'>
              <Button
                className="catch-btn"
                variant="outlined"
                // onClick={() => onClick(item)}
              >
                Catch
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
