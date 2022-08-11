import { useContext, useState } from "react";
import { Button } from "@mui/material";
import SearchBox from "../atoms/SearchBox";
import FilterTabs from "./FilterTabs";
import PokemonContext from "../../state/PokemonContext";
import "./styles/pokemonFilter.styles.css";
import { getSinglePokemon } from "../../network/pokemon.api";
import Snackbar from "../molecules/SnackBar";

const PokemonFilter = () => {
  const { filterInput, actions } = useContext(PokemonContext);

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleSearchButtonClick = async () => {
    try {
      const res = await getSinglePokemon(
        filterInput.searchKeyword.toLowerCase()
      );
      const pokemon = await res.json();
      actions.setSelectedPokemon(pokemon);

      // clear the other filters
      actions.setSelectedAbility("");
      actions.setSelectedType("");

      // show the pokemon on the drop down menu
      actions.setPokemons([pokemon]);
      actions.setSelectedIndexInAutoComplete(0);
    } catch (error) {
      setOpenSnackBar(true);
      console.log(error);
    }
  };
  return (
    <div className="pokemon-filter">
      <Snackbar
        message={`Sorry! The pokemon named ${filterInput.searchKeyword} does not exist... yet!`}
        setOpen={setOpenSnackBar}
        open={openSnackBar}
      />
      <div className="search-area">
        <div className="search-container">
          <SearchBox
            value={filterInput.searchKeyword}
            onChange={(e) => {
              if (e.target.value.length <= 50)
                actions.setSearchKeyword(e.target.value);
            }}
            onEnterKeyPressed={handleSearchButtonClick}
          />
        </div>
        <Button
          className="search-btn"
          variant="outlined"
          onClick={handleSearchButtonClick}
        >
          Search
        </Button>
      </div>
      <div className="filter-tabs-container">
        <FilterTabs />
      </div>
    </div>
  );
};

export default PokemonFilter;
