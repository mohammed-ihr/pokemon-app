import { useContext } from "react";
import { Button } from "@mui/material";
import SearchBox from "../atoms/SearchBox";
import FilterTabs from "./FilterTabs";
import PokemonContext from "../../state/PokemonContext";
import "./styles/pokemonFilter.styles.css";
import { getSinglePokemon } from "../../network/pokemon.api";

const PokemonFilter = () => {
  const { filterInput, actions } = useContext(PokemonContext);

  const handleSearchButtonClick = async () => {
    try {
      const res = await getSinglePokemon(filterInput.searchKeyword);
      const pokemon = await res.json();
      actions.setSelectedPokemon(pokemon);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pokemon-filter">
      <div className="search-area">
        <div className="search-container">
          <SearchBox
            value={filterInput.searchKeyword}
            onChange={(e) => {
              actions.setSearchKeyword(e.target.value);
            }}
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
