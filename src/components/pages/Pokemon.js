import { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PokemonFilter from "../organisms/PokemonFilter";
import AppBar from "../molecules/AppBar";
import "./styles/pokemon.styles.css";
import { getAbilities, getTypes } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";
import PokemonDisplay from "../organisms/PokemonDisplay";
import { sortArrayOfObjectsByProperty } from "../../common/commonFunctions";

const Pokemon = () => {
  const { actions } = useContext(PokemonContext);

  const populateAbbilities = async () => {
    const res = await getAbilities();
    let abilities = await res.json();
    abilities = sortArrayOfObjectsByProperty(abilities.results, "name");
    console.log(abilities);
    actions.setAbilities(abilities);
  };

  const populateTypes = async () => {
    const res = await getTypes();
    let types = await res.json();
    types = sortArrayOfObjectsByProperty(types.results, "name");
    actions.setTypes(types);
  };

  useEffect(() => {
    populateAbbilities();
    populateTypes();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="pokemon">
      <div className="app-bar">
        <AppBar />
      </div>
      <div className="pokemon-contents">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="filter-container">
              <PokemonFilter />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="display-container">
              <PokemonDisplay />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Pokemon;
