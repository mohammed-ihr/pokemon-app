import {
  Autocomplete,
  Chip,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { getDatafromURL } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";
import "./styles/pokemonDisplay.styles.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ConfirmationDialog from "../molecules/ConfirmationDialog";
import { findPokemonImage } from "../../common/commonFunctions";

const PokemonDisplay = () => {
  const { pokemon, filterInput, actions } = useContext(PokemonContext);
  const { selectedPokemon } = pokemon;

  const [open, setOpen] = useState(false);

  const handleDropDownChange = async (value) => {
    const res = await getDatafromURL(value.url);
    const pokemon = await res.json();
    actions.setSelectedPokemon(pokemon);

    actions.setSelectedIndexInAutoComplete(value.id);
  };

  return (
    <div className="pokemon-display">
      <ConfirmationDialog open={open} handleClose={() => setOpen(false)} />
      <div className="pokemon-container">
        {pokemon.pokemons.length > 0 ? (
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
              <img
                height="200px"
                src={findPokemonImage(selectedPokemon)}
                alt="new"
              />
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

            <div className="catch-btn-container">
              <Button
                className="catch-btn"
                variant="outlined"
                onClick={() => setOpen(true)}
              >
                Catch
              </Button>
            </div>
          </div>
        ) : (
          <div className="helper-text">
            <Typography variant="subtitle1" component="div">
              Welcome to the arena! Start searching a Pokémon by directly typing the name in the
              search box or browse Pokémons by filtering with Ability or Type.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
