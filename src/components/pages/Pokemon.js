import { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PokemonFilter from "../organisms/PokemonFilter";
import AppBar from "../molecules/AppBar";
import "./styles/pokemon.styles.css";
import { getAbilities } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";

const Pokemon = () => {
  const { actions } = useContext(PokemonContext);

  const populateAbbilities = async () => {
    const res = await getAbilities();
    const abilities = await res.json();
    actions.setAbilities(abilities);
  };

  useEffect(() => {
    populateAbbilities();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="pokemon">
      <div className="app-bar">
        <AppBar />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PokemonFilter />
        </Grid>
        <Grid item xs={12} md={6}>
          display
        </Grid>
      </Grid>
    </div>
  );
};

export default Pokemon;
