import { Button } from "@mui/material";
import SearchBox from "../atoms/SearchBox";
import FilterTabs from "./FilterTabs";
import "./styles/pokemonFilter.styles.css";

const PokemonFilter = () => {
  return (
    <div className="pokemon-filter">
      <div className="search-area">
        <div className="search-container">
          <SearchBox />
        </div>
        <Button className="search-btn" variant="outlined">
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
